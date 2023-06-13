import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from '../services/auth.service';

import type { Tokens } from '../types/tokens.type';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {

  constructor(private authService: AuthService) {
    super();
  }

  public async validate(username: string, password: string): Promise<Tokens> {
    const token = await this.authService.signin({ email: username, password });

    if (!token) {
      throw new UnauthorizedException();
    }

    return token;
  }

}
