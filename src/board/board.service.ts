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

    const board: BoardEntity = new BoardEntity();
    board.title = body.title;
    board.contents = body.contents;
    board.image_url = body.image_url;
    board.gender = body.gender;
    board.time = body.time;
    board.people = 1;
    board.status = true; // 신청가능

    if (board.people == 4) {
      //신청마감.
      board.status = false;
    }

    board.user = userID;
    await this.boardEntity.save(board);

    const team: Team_entity = new Team_entity();
    team.board = board;
    await this.teamEntity.findOne({
      relations: {
        users: true,
      },
      where: {
        id: req['user'].id,
      },
    });
    const user = await this.userEntity.findOneBy({ id: userID });
    team.users = [user];
    await this.teamEntity.save(team);
    return board;
  }
  async search() {
    const board = this.boardEntity.find();
    return board;
  }
  async join(qur: BoardJoinDto, req: Request) {
    // 조인하면 해당 유저엔티티의 팀 아이디가 팀 아이디로 기입이 되게 한다.
    const userID = req['user'].id; //로그인한 유저의 페이로드 저장
    const teamID = qur.team; // 팀번호
    const user = await this.userEntity.findOne({
      //이 유저가 현재 다른 팀에 속해있는가?
      relations: {
        team: true,
      },
      where: {
        id: userID,
      },
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
      //게시글에 해당하는 팀넘버 찾기
      relations: { team: true },
      where: {
        team: {
          id: teamID,
        },
      },
    });
    if (board) {
      board.people += 1;
      await this.boardEntity.save(board);
    }
    return board;
  }
}
