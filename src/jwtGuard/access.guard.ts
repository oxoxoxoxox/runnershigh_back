import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AccessGuard implements CanActivate {
  constructor(
    private jwtService: JwtService,
    private configService: ConfigService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const req = context.switchToHttp().getRequest();
    const token = req.headers.authorization;
    if (!token) {
      console.log('헤드가 비어있습니다.');
      throw new UnauthorizedException();
    }
    const jwt = token.replace('Bearer ', '');
    const secretA = this.configService.get('access_Key');
    try {
      const payload = await this.jwtService.verifyAsync(jwt, {
        secret: secretA,
      });
      req['user'] = payload;
    } catch (e) {
      if (e.name === 'JsonWebTokenError') {
        throw new UnauthorizedException('Is not access');
      }
      if (e.name === 'TokenExpiredError') {
        throw new UnauthorizedException(
          '만료되었습니다. 토큰을 다시 발급 받으시오.',
        );
      }
      console.log(e);
      throw new UnauthorizedException();
    }
    return true;
  }
}
