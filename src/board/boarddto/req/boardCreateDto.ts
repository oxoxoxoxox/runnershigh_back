import { IsBoolean, IsNumber, IsString } from 'class-validator';

export class BoardCreateDto {
  @IsString()
  title: string;
  @IsString()
  contents: string;
  @IsString()
  image_url: string;
  @IsNumber()
  people: number;
  @IsBoolean()
  status: boolean;
  @IsString()
  gender: string;
  @IsNumber()
  time: number;
}
