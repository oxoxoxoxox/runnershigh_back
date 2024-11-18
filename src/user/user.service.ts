import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from '../Entitiy/user.entity';
import { Repository } from 'typeorm';
import { UserCreateDto } from './userdto/userCreateDto';
import { UserLoginDto } from './userdto/userLoginDto';

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

    const save: UserEntity = await this.userEntity.save(data);
    return save; //reponse 병경
  }
  async login(query: UserLoginDto) {
    const IDdata = this.userEntity.findOne({
      where: {
        userID: query.userID,
      },
    });
    if (!IDdata) {
      throw new UnauthorizedException('ID(E-Mail)이 틀렸습니다.');
    }
    const PWdata = this.userEntity.findOne({
      where: {
        userPW: query.userPW,
      },
    });
    if (!PWdata) {
      throw new UnauthorizedException('PW가 틀렸습니다.');
    }
  }
}
