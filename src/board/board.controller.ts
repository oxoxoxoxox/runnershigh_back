import {
  Body,
  Controller,
  Post,
  UseGuards,
  Request,
  Get,
  UseInterceptors,
  UploadedFile,
  Res,
} from '@nestjs/common';
import { BoardService } from './board.service';
import { BoardCreateDto } from './boarddto/req/boardCreateDto';
import { AccessGuard } from '../jwtGuard/access.guard';
import { BoardJoinDto } from './boarddto/req/boardJoin.Dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import * as path from 'node:path';
import { Response } from 'express';
import { BoardSearchDto } from './boarddto/req/boardSearch.Dto';

interface FileParams {
  fileName: string;
}

@UseGuards(AccessGuard)
@Controller('board')
export class BoardController {
  constructor(private readonly boardService: BoardService) {}

  @Post('create')
  async create(
    @Body() body: BoardCreateDto,
    @UploadedFile() file: Express.Multer.File,
    @Request() req: Request,
  ) {
    return this.boardService.create(body, req);
  }
  @Get('searchAll')
  async searchAll() {
    return this.boardService.searchAll();
  }

  @Post('search')
  async search(@Body() body: BoardSearchDto) {
    return this.boardService.search(body);
  }

  @Post('upload')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './uploads',
        filename: (req, file, cb) => {
          cb(null, `${file.originalname}`);
        },
      }),
    }),
  )
  async uploadfile() {
    return 'sss';
  }
  @Get('getFile')
  getFile(@Res() res: Response, @Body() file: FileParams) {
    res.sendFile(path.join(__dirname, '../uploads/' + file.fileName));
  }
  @Post('join')
  async join(@Body() body: BoardJoinDto, @Request() req: Request) {
    return this.boardService.join(body, req);
  }
}
