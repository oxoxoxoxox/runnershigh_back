import { Injectable, Request } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BoardCreateDto } from './boarddto/req/boardCreateDto';
import { BoardEntity } from '../Entitiy/board.entity';
import { UserEntity } from '../Entitiy/user.entity';
import { Team_entity } from '../Entitiy/team_entity';

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

    const team = await this.teamEntity.findOne({
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
  async join() {}
}
