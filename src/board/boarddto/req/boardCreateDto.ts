import { IsString } from 'class-validator';

export class BoardCreateDto {
  @IsString()
  title: string;
  @IsString()
  contents: string;
  @IsString()
  gender: string;
  @IsString()
  time: string;
  @IsString()
  image_url: string;
}
