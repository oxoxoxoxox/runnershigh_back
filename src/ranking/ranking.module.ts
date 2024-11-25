import { Module } from '@nestjs/common';
import { RankingController } from './ranking.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MissionEntity } from '../Entitiy/mission.entity';
import { MissionList } from '../Entitiy/mission_list';
import { UserEntity } from '../Entitiy/user.entity';
import { MissionService } from '../mission/mission.service';
import { RankingService } from './ranking.service';
import { RangkingEntity } from '../Entitiy/rangking.entity';
import { RunningEntity } from '../Entitiy/running.entity';

@Module({
  controllers: [RankingController],
  providers: [RankingService],
  imports: [TypeOrmModule.forFeature([MissionEntity, MissionList,
    UserEntity,RangkingEntity,RunningEntity])],
  exports: [TypeOrmModule],
})
export class RankingModule {}
