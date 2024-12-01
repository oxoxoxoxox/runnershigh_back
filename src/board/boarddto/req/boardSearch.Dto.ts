import { IsNumber } from 'class-validator';

export class BoardSearchDto {
  @IsNumber()
  team: number;
}
