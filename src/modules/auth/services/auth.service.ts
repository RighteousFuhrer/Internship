import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

import type { AuthDto } from '../dtos/auth.dto';
import type { CreateUserDto } from '../dtos/createUser.dto';
import type { Tokens } from '../types/tokens.type';

@Injectable()
export class AuthService {

  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  public async signin(dto: AuthDto): Promise<Tokens> {
    const user = await this.usersService.findOneByEmail(dto.email);

    if (!user) {
      throw new NotFoundException('Email not found');
    }

    const passwordsMatch = await bcrypt.compare(dto.password, user.password);

    if (!passwordsMatch) {
      throw new UnauthorizedException('Password mismatch');
    }

    const tokens = await this.getTokens(user.id, user.email);
    return tokens;
  }

  public async getTokens(id: number, email: string): Promise<Tokens> {
    const [at, rt] = await Promise.all([
      this.jwtService.signAsync(
        { sub: id, email },
        { expiresIn: 15 * 60, secret: 'at-secret' },
      ),
      this.jwtService.signAsync(
        { sub: id, email },
        { expiresIn: 60 * 60 * 7, secret: 'rt-secret' },
      ),
    ]);

    return {
      access_token: at,
      refresh_token: rt,
    };
  }

  // public async refreshToken(id: number, refreshToken:string) : string {
  //   const
  // }

  public async signup(dto: CreateUserDto): Promise<Tokens> {
    const newUser = await this.usersService.create(dto);

    const tokens = this.getTokens(newUser.id, newUser.email);

    return tokens;
  }

  public async logout(): Promise<Tokens> {
    return await { access_token: '', refresh_token: '' };
  }

  public async refresh(): Promise<Tokens> {
    return await { access_token: '', refresh_token: '' };
  }

}
