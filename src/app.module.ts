import { Module, ValidationPipe } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './Entitiy/user.entity';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { APP_PIPE } from '@nestjs/core';
import { BoardModule } from './board/board.module';
import { BoardEntity } from './Entitiy/board.entity';
import { JwtModule } from '@nestjs/jwt';
import { MissionList } from './Entitiy/mission_list';
import { MissionEntity } from './Entitiy/mission.entity';
import { MissionModule } from './mission/mission.module';
import { RangkingEntity } from './Entitiy/rangking.entity';
import { RunningModule } from './running/running.module';
import { RunningEntity } from './Entitiy/running.entity';
import { RankingModule } from './ranking/ranking.module';
import { Team_entity } from './Entitiy/team_entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: './.env',
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'mariadb',
        host: configService.get('DB_HOST'),
        port: parseInt(configService.get('DB_PORT')),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_NAME'),
        entities: [
          UserEntity,
          BoardEntity,
          MissionList,
          MissionEntity,
          RangkingEntity,
          RunningEntity,
          Team_entity,
        ],
        synchronize: true,
      }),
    }),
    UserModule,
    BoardModule,
    JwtModule,
    MissionModule,
    RunningModule,
    RankingModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_PIPE,
      useClass: ValidationPipe,
    },
  ],
  exports: [TypeOrmModule, JwtModule],
})
export class AppModule {}
