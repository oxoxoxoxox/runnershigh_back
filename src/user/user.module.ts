import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from '../Entitiy/user.entity';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { MissionEntity } from '../Entitiy/mission.entity';
import { MissionList } from '../Entitiy/mission_list';
import { RangkingEntity } from '../Entitiy/rangking.entity';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      UserEntity,
      MissionEntity,
      MissionList,
      RangkingEntity,
    ]),
    JwtModule.register({}),
  ],
  controllers: [UserController],
  providers: [UserService],
  exports: [TypeOrmModule, JwtModule],
})
export class UserModule {}
