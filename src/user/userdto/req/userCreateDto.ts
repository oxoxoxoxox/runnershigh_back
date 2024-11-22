import { IsBoolean, IsEmail, IsNumber, IsString } from 'class-validator';

export class UserCreateDto {
  @IsString()
  userName: string;
  @IsEmail()
  userID: string;
  @IsString()
  userPW: string;
  @IsBoolean()
  sex: boolean;
  @IsNumber()
  age: number;
  @IsBoolean()
  accept: boolean;
}
