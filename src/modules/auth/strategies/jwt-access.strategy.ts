import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

type Payload = {
  sub: string;
  name: string;
}

type PayloadDecoded = {
  id : number;
  email:string;
}

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {

  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'at-secret',
    });
  }

  public validate(payload: Payload) :  PayloadDecoded {
    return {
      id: Number(payload.sub),
      email: payload.name,
    };
  }

}
