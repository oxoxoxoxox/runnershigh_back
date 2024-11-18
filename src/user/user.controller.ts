import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { UserService } from './user.service';
import { UserCreateDto } from './userdto/userCreateDto';
import { UserLoginDto } from './userdto/userLoginDto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Post('create') // 회원가입
  async create(@Body() body: UserCreateDto) {
    return this.userService.create(body);
  }
  @Get('login')
  async login(@Query() query: UserLoginDto) {
    return this.userService.login(query);
  }
}
