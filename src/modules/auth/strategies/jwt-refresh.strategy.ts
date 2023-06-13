import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

import type { Request } from 'express';
import { Injectable } from '@nestjs/common';

type Payload = {
  sub: string;
  name: string;
}

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt-refresh') {

  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'rt-secret',
      passReqToCallback:true,
    });
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public validate(req:Request, payload: Payload) :  any {
    const refreshToken = req.get('authorization')?.replace('Bearer', '').trim();
    return {
      ...payload,
      refreshToken,
    };
  }

}
