import { Module } from '@nestjs/common';
import { RankingController } from './ranking.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Mission } from '../Entitiy/mission.entity';
import { MissionList } from '../Entitiy/mission_list';
import { UserEntity } from '../Entitiy/user.entity';
import { MissionService } from '../mission/mission.service';
import { RankingService } from './ranking.service';
import { Ranking } from '../Entitiy/rangking.entity';

@Module({
  controllers: [RankingController],
  providers: [RankingService],
  imports: [TypeOrmModule.forFeature([Mission, MissionList, UserEntity,Ranking])],
  exports: [TypeOrmModule],
})
export class RankingModule {}
