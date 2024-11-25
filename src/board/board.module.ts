import { Module } from '@nestjs/common';
import { BoardController } from './board.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from '../Entitiy/user.entity';
import { BoardEntity } from '../Entitiy/board.entity';
import { BoardService } from './board.service';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserEntity, BoardEntity]),
    JwtModule.register({}),
  ],
  controllers: [BoardController],
  providers: [BoardService],
  exports: [TypeOrmModule, JwtModule],
})
export class BoardModule {}
