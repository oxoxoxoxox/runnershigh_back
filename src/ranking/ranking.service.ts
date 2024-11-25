import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RangkingEntity } from '../Entitiy/rangking.entity';
import { RunningEntity } from '../Entitiy/running.entity';
import { UserEntity } from '../Entitiy/user.entity';


@Injectable()
export class RankingService {
  constructor(
    @InjectRepository(RangkingEntity)
    private readonly rankingRepository: Repository<RangkingEntity>,
    @InjectRepository(RunningEntity)
    private readonly runningRepository: Repository<RunningEntity>,
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {
  }

  async getTopRankings() {
    const rankings = await this.rankingRepository
      .createQueryBuilder('ranking')
      .leftJoinAndSelect('ranking.user', 'user')
      .leftJoinAndSelect('ranking.running', 'running')
      .orderBy('running.distance', 'DESC')
      .take(5)
      .getMany();

    console.log('Raw rankings:', rankings); // 원본 데이터 로깅

    // 필요한 데이터만 매핑하고 순위 부여
    const formattedRankings = rankings.map((ranking, index) => ({
      position: index + 1, // 순위 부여
      userName: ranking.user.userName,
      level: ranking.user.level,
      distance: ranking.running.distance,
    }));

    console.log('Formatted rankings with positions:', formattedRankings); // 포맷된 데이터 로깅

    return formattedRankings;
  }
}