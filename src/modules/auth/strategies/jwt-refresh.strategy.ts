import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

import type { Request } from 'express';
import type { JwtPayload } from '../types/tokens.type';

@Injectable()
export class JwtRefreshStrategy extends PassportStrategy(Strategy, 'jwt-refresh') {

  constructor(configService: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: configService.get('jwt_rt_secret', { infer: true }),
      passReqToCallback:true,
    });
  }

  public validate(req:Request, payload: JwtPayload) :  JwtPayload {
    const refreshToken = req.get('authorization')?.replace('Bearer', '').trim() || '';

    return {
      ...payload,
      refreshToken,
    };
  }

}
