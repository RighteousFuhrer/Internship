import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../../users/services/users.service.abstract';

import type { CreateUserDto } from '../../users/dtos/createUser.dto';
import type { AuthDto } from '../dtos/auth.dto';
import type { AuthService } from './auth.service.abstract';
import type { Tokens } from '../types/tokens.type';

@Injectable()
export class AuthServiceImpl implements AuthService {

  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
    private configService: ConfigService,
  ) {}

  public async signin(dto: AuthDto): Promise<Tokens> {
    const user = await this.usersService.validateUser(dto);

    const tokens = await this._getTokens(user.id, user.email);
    this.usersService.updateToken(user.id, tokens.refresh_token);

    return tokens;
  }

  public async signup(dto: CreateUserDto): Promise<Tokens> {
    const newUser = await this.usersService.createUser(dto);

    const tokens = await this._getTokens(newUser.id, newUser.email);
    this.usersService.updateToken(newUser.id, tokens.refresh_token);

    return tokens;
  }

  public async logout(id: string): Promise<void> {
    await this.usersService.updateToken(id, null);
  }

  public async refresh(id: string, rt: string): Promise<Tokens> {
    const user = await this.usersService.validateToken(id, rt);

    const tokens = await this._getTokens(user.id, user.email);
    this.usersService.updateToken(user.id, tokens.refresh_token);

    return tokens;
  }

  private async _getTokens(id: string, email: string): Promise<Tokens> {
    const [at, rt] = await Promise.all([
      this.jwtService.signAsync(
        { sub: id, email },
        { expiresIn: 15 * 60, secret: this.configService.get('jwt_at_secret') },
      ),
      this.jwtService.signAsync(
        { sub: id, email },
        {
          expiresIn: 60 * 60 * 7,
          secret: this.configService.get('jwt_rt_secret'),
        },
      ),
    ]);

    return {
      access_token: at,
      refresh_token: rt,
    };
  }

}
