import {
  Injectable,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { JwtService } from '@nestjs/jwt';

import type { AuthDto } from '../dtos/auth.dto';
import type { CreateUserDto } from '../dtos/createUser.dto';
import type { Tokens } from '../types/tokens.type';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {

  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
    private configService: ConfigService,
  ) {}

  public async signin(dto: AuthDto): Promise<Tokens> {
    const user = await this.usersService.validateUser(dto);

    const tokens = await this.getTokens(user.id, user.email);
    this.updateToken(user.id, tokens.refresh_token);

    return tokens;
  }

  public async signup(dto: CreateUserDto): Promise<Tokens> {
    const newUser = await this.usersService.create(dto);

    const tokens = await this.getTokens(newUser.id, newUser.email);
    this.updateToken(newUser.id, tokens.refresh_token);

    return tokens;
  }

  public async logout(): Promise<Tokens> {
    return await { access_token: '', refresh_token: '' };
  }

  public async refresh(): Promise<Tokens> {
    return await { access_token: '', refresh_token: '' };
  }

  public async updateToken(id: number, rt: string): Promise<void> {
    await this.usersService.updateToken(id, rt);
  }

  public async getTokens(id: number, email: string): Promise<Tokens> {
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
