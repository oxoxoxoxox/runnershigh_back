import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from '../Entitiy/user.entity';
import { Repository } from 'typeorm';
import { UserCreateDto } from './userdto/req/userCreateDto';
import { UserLoginDto } from './userdto/req/userLoginDto';
import { LoginResDto } from './userdto/res/login.res.dto';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userEntity: Repository<UserEntity>,
    private configService: ConfigService,
    private jwtService: JwtService,
  ) {}
  async create(body: UserCreateDto) {
    const data: UserEntity = new UserEntity();
    data.userName = body.userName;
    data.userID = body.userID;
    data.userPW = body.userPW;
    data.sex = body.sex;
    data.age = body.age;
    data.accept = body.accept;
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
    const payload = {
      id: IDdata.id.toString(),
      userName: IDdata.userName.toString(),
    };
    const secA = this.configService.get('access_Key');
    const secB = this.configService.get('refresh_Key');
    const accessToken = this.jwtService.sign(payload, {
      secret: secA,
      expiresIn: '100s',
    });
    const refreshToken = this.jwtService.sign(payload, {
      secret: secB,
      expiresIn: '100s',
    });
    res.access = accessToken;
    res.refresh = refreshToken;
    return res;
  }
}
