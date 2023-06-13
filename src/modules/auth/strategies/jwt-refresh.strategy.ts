import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import type { Request } from 'express';
import type { JwtPayload, JwtRefreshPayload } from '../types/tokens.type';

@Injectable()
export class JwtRefreshStrategy extends PassportStrategy(Strategy, 'jwt-refresh') {

  constructor(configService: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: configService.get('jwt_rt_secret', { infer: true }),
      passReqToCallback:true,
    });
  }

  public validate(req:Request, payload: JwtPayload) :  JwtRefreshPayload {
    const refreshToken = req.get('authorization')?.replace('Bearer', '').trim() || '';

    return {
      ...payload,
      refreshToken,
    };
  }

}
