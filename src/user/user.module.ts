import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from '../Entitiy/user.entity';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { Mission } from '../Entitiy/mission.entity';
import { MissionList } from '../Entitiy/mission_list';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity,Mission,MissionList])],
  controllers: [UserController],
  providers: [UserService],
  exports: [TypeOrmModule],
})
export class UserModule {}
