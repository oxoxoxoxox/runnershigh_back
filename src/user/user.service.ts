import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from '../Entitiy/user.entity';
import { Repository } from 'typeorm';
import { UserCreateDto } from './userdto/userCreateDto';

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
    data.UserPW = body.userPW;
    data.sex = body.sex;
    data.age = body.age;

    const save: UserEntity = await this.userEntity.save(data);
    return save; //reponse 병경
  }
}
