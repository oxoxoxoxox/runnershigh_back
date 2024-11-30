import { IsNumber } from 'class-validator';
import { Transform } from 'class-transformer';

export class BoardJoinDto {
  @IsNumber()
  @Transform(({ value }) => Number(value))
  team: number;
}
