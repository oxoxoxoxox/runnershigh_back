import { IsEmail, IsNumber, IsString } from 'class-validator';

export class UserCreateDto {
  @IsString()
  userName: string;
  @IsEmail()
  userID: string;
  @IsString()
  userPW: string;
  @IsString()
  sex: boolean;
  @IsNumber()
  age: number;
}
