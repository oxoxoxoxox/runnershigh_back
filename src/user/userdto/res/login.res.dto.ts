import { IsString } from 'class-validator';

export class LoginResDto {
  @IsString()
  access: string;
  @IsString()
  refresh: string;
}
