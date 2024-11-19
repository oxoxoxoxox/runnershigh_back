import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from '../Entitiy/user.entity';
import { Repository } from 'typeorm';
import { UserCreateDto } from './userdto/req/userCreateDto';
import { UserLoginDto } from './userdto/req/userLoginDto';
import { LoginResDto } from './userdto/res/login.res.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userEntity: Repository<UserEntity>,
  ) {}
  async create(body: UserCreateDto) {
    const data: UserEntity = new UserEntity();
    data.userName = body.userName;
    data.userID = body.userID;
    data.userPW = body.userPW;
    data.sex = body.sex;
    data.age = body.age;
    data.accept = body.accept;

    console.log(data);
    await this.userEntity.save(data);
    return '축하합니다.'; //reponse 병경
  }
  async login(body: UserLoginDto) {
    const res: LoginResDto = new LoginResDto();
    const IDdata: UserEntity = await this.userEntity.findOne({
      where: {
        userID: body.userID,
      },
    });
    if (!IDdata) {
      throw new UnauthorizedException('ID(E-Mail)이 틀렸습니다.');
    }
    const PWdata: UserEntity = await this.userEntity.findOne({
      where: {
        userPW: body.userPW,
      },
    });
    if (!PWdata) {
      throw new UnauthorizedException('PW가 틀렸습니다.');
    }
    res.access = '로그인에 성공하였습니다.';
    return res.access;
  }
}
