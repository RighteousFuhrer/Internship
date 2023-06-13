import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from '../services/auth.service';
import { AuthDto } from '../dtos/auth.dto';
import { CreateUserDto } from '../dtos/createUser.dto';

import type { Tokens } from '../types/tokens.type';

@Controller('auth')
export class AuthController {

  constructor(private readonly authService: AuthService) {}

  @Post('/local/signin')
  public async signin(@Body() dto: AuthDto): Promise<Tokens> {
    return await this.authService.signin(dto);
  }

  @Post('/local/signup')
  public async signup(@Body() dto: CreateUserDto): Promise<Tokens> {
    return await this.authService.signup(dto);
  }

  @Post('/local/logout')
  public async logout(): Promise<Tokens> {
    return await this.authService.logout();
  }

  @Post('/local/refresh')
  public async refresh(): Promise<Tokens> {
    return await this.authService.refresh();
  }

}
