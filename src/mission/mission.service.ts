import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MissionList } from '../Entitiy/mission_list';

@Injectable()
export class MissionService {
  constructor(
    @InjectRepository(MissionList)
    private readonly missionListRepository: Repository<MissionList>,
  ) {}
  // 모든 미션 목록 가져오기
  async getAllMissionLists(): Promise<MissionList[]> {
    return await this.missionListRepository.find({
      relations: ['missions'], // MissionList와 연결된 Mission 포함
    });
  }
}
