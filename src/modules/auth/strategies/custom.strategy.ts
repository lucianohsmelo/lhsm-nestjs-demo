import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from '../auth.service';

@Injectable()
export class CustomStrategy extends PassportStrategy(Strategy, 'custom') {
  constructor() {
    super();
  }

  async validate(username: string, password: string): Promise<any> {
    console.log(username, password);
    return { userId: 1, username: 'john', password: 'changeme' };
  }
}
