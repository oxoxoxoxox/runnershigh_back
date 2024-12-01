import { Injectable, Request } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BoardCreateDto } from './boarddto/req/boardCreateDto';
import { BoardEntity } from '../Entitiy/board.entity';
import { UserEntity } from '../Entitiy/user.entity';
import { Team_entity } from '../Entitiy/team_entity';
import { BoardJoinDto } from './boarddto/req/boardJoin.Dto';

@Injectable()
export class BoardService {
  constructor(
    @InjectRepository(BoardEntity)
    private readonly boardEntity: Repository<BoardEntity>,
    @InjectRepository(Team_entity)
    private readonly teamEntity: Repository<Team_entity>,
    @InjectRepository(UserEntity)
    private readonly userEntity: Repository<UserEntity>,
  ) {}

  async create(body: BoardCreateDto, req: Request) {
    const userID = req['user'].id;

    const team: Team_entity = new Team_entity();
    const board: BoardEntity = new BoardEntity();
    board.title = body.title;
    board.contents = body.contents;
    board.gender = body.gender;
    board.time = body.time;
    board.date = body.date;
    board.people = 1;
    board.status = true; // 신청가능

    if (board.people == 4) {
      //신청마감.
      board.status = false;
    }

    board.team = team;

    const user = await this.userEntity.findOne({
      where: { id: userID },
    });

    board.user = user;

    await this.teamEntity.save(team);
    await this.boardEntity.save(board);

    team.board = board;
    team.users = [user];
    await this.teamEntity.save(team);

    return {
      id: board.id,
      title: board.title,
      contents: board.contents,
      people: board.people,
      teamId: board.team.id,
    };
  }

  async search() {
    const board = this.boardEntity.find();
    return board;
  }

  async join(qur: BoardJoinDto, req: Request) {
    const teamID = qur.team; // DTO에서 변환된 숫자 사용
    const userID = req['user'].id;

    const user = await this.userEntity.findOne({
      where: { id: userID },
      relations: { team: true },
    });

    if (user?.team) {
      throw new Error('이미 팀에 참가되어있습니다.');
    }

    const team = await this.teamEntity.findOne({
      where: { id: teamID },
      relations: { users: true },
    });

    if (!team) {
      throw new Error('존재하지 않는 크루입니다.');
    }

    user.team = team;
    await this.userEntity.save(user);

    const board = await this.boardEntity.findOne({
      where: { team: { id: teamID } },
      relations: { team: true },
    });

    if (board) {
      board.people += 1;
      await this.boardEntity.save(board);
    }
    return { message: '팀에 성공적으로 참가하였습니다.', board };
  }
}
