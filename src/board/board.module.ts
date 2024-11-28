import { Module } from '@nestjs/common';
import { BoardController } from './board.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from '../Entitiy/user.entity';
import { BoardEntity } from '../Entitiy/board.entity';
import { BoardService } from './board.service';
import { JwtModule } from '@nestjs/jwt';
import { Team_entity } from '../Entitiy/team_entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserEntity, BoardEntity, Team_entity]),
    JwtModule.register({}),
  ],
  controllers: [BoardController],
  providers: [BoardService],
  exports: [TypeOrmModule, JwtModule],
})
export class BoardModule {}
