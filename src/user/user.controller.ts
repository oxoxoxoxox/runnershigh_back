import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { UserCreateDto } from './userdto/req/userCreateDto';
import { UserLoginDto } from './userdto/req/userLoginDto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Post('create') // 회원가입
  async create(@Body() body: UserCreateDto) {
    return this.userService.create(body);
  }
  @Post('login')
  async login(@Body() body: UserLoginDto) {
    return this.userService.login(body);
  }
}
