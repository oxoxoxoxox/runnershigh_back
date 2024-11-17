import { Body, Controller, Get, Post } from "@nestjs/common";
import { UserService } from "./user.service";
import { UserCreateDto } from "./userdto/userCreateDto";

@Controller('user')
export class UserController {
  constructor(private readonly userservice: UserService) {}
  @Post('create') // 회원가입
  async create(@Body() body: UserCreateDto) {
    this.userservice
  }
}
