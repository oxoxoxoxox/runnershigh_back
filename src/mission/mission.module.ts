import { Module } from '@nestjs/common';
import { MissionController } from './mission.controller';
import { MissionService } from './mission.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MissionEntity } from '../Entitiy/mission.entity';
import { MissionList } from '../Entitiy/mission_list';
import { UserEntity } from '../Entitiy/user.entity';
import { RangkingEntity } from '../Entitiy/rangking.entity';

@Module({
  controllers: [MissionController],
  providers: [MissionService],
  imports: [TypeOrmModule.forFeature([MissionEntity, MissionList, UserEntity])],
  exports: [TypeOrmModule],
})
export class MissionModule {}
