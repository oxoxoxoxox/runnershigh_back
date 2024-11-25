import { Injectable, Request } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BoardCreateDto } from './boarddto/req/boardCreateDto';
import { BoardEntity } from '../Entitiy/board.entity';
import { UserEntity } from '../Entitiy/user.entity';

@Injectable()
export class BoardService {
  constructor(
    @InjectRepository(BoardEntity)
    private readonly boardEntity: Repository<BoardEntity>,
  ) {}
  async create(body: BoardCreateDto, req: Request) {
    const userdata: UserEntity = new UserEntity();
    userdata.id = req['user'].id;
    const data: BoardEntity = new BoardEntity();
    data.title = body.title;
    data.contents = body.contents;
    data.image_url = body.image_url;
    data.gender = body.gender;
    data.time = body.time;
    data.people = 1;
    data.status = true; // 신청가능
    data.user = userdata;
    await this.boardEntity.save(data);
    return data;
  }
  async search() {
    const board = this.boardEntity.find({});
    return board;
  }
  async join() {

  }
}
