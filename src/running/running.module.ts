import { Module } from '@nestjs/common';
import { RunningService } from './running.service';
import { RunningController } from './running.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MissionEntity } from '../Entitiy/mission.entity';
import { MissionList } from '../Entitiy/mission_list';
import { UserEntity } from '../Entitiy/user.entity';
import { RunningEntity } from '../Entitiy/running.entity';
import { RangkingEntity } from '../Entitiy/rangking.entity';

@Module({
  providers: [RunningService],
  controllers: [RunningController],
  imports: [TypeOrmModule.forFeature([MissionEntity, MissionList, UserEntity,RunningEntity,RangkingEntity])],
  exports: [TypeOrmModule],

})
export class RunningModule {}
