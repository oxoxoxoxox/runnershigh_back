import { Controller, Get } from '@nestjs/common';
import { MissionService } from './mission.service';
import { MissionList } from '../Entitiy/mission_list';

@Controller('mission')
export class MissionController {
  constructor(private readonly missionService: MissionService) {}

  // 모든 미션 리스트 가져오기
  @Get('list')
  async getAllMissionLists(): Promise<MissionList[]> {
    return await this.missionService.getAllMissionLists();
  }
}
