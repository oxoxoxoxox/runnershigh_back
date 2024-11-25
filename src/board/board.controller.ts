import {
  Body,
  Controller,
  Post,
  UseGuards,
  Request,
  Get,
} from '@nestjs/common';
import { BoardService } from './board.service';
import { BoardCreateDto } from './boarddto/req/boardCreateDto';
import { AccessGuard } from '../jwtGuard/access.guard';

@Controller('board')
export class BoardController {
  constructor(private readonly boardService: BoardService) {}
  @UseGuards(AccessGuard)
  @Post('create')
  async create(@Body() body: BoardCreateDto, @Request() req: Request) {
    return this.boardService.create(body, req);
  }
  @Get('search')
  async search() {
    return this.boardService.search();
  }
}
