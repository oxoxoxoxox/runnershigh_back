import { IsNumber } from 'class-validator';

export class BoardJoinDto {
  @IsNumber()
  team: number;
}
