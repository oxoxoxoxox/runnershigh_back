import { Controller, Get } from '@nestjs/common';
import { MissionService } from './mission.service';

@Controller('mission')
export class MissionController {
  constructor(private readonly missionService: MissionService) {}

  @Get('list')
  async getAllMissionLists() {
    return await this.missionService.getAllMissionLists();
  }
}
