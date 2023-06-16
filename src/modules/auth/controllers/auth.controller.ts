import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  UseGuards,
} from '@nestjs/common';
import { JwtAtGuard } from '../../../framework/guards/jwt-at.guard';
import { JwtRtGuard } from '../../../framework/guards/jwt-rt.guard';
import { CreateUserDto } from '../../users/dtos/createUser.dto';
import { AuthDto } from '../dtos/auth.dto';
import { User } from '../../../framework/decorators/user.decorator';
import { AuthService } from '../services/auth.service.abstract';
import { JwtPayload } from '../types/tokens.type';

import type { Tokens } from '../types/tokens.type';

@Controller('auth')
export class AuthController {

  constructor(private readonly authService: AuthService) {}

  @Post('/signin')
  @HttpCode(HttpStatus.CREATED)
  public async signin(@Body() dto: AuthDto): Promise<Tokens> {
    return await this.authService.signin(dto);
  }

  @Post('signup')
  @HttpCode(HttpStatus.OK)
  public async signup(@Body() dto: CreateUserDto): Promise<Tokens> {
    return await this.authService.signup(dto);
  }

  @UseGuards(JwtAtGuard)
  @Post('logout')
  @HttpCode(HttpStatus.OK)
  public async logout(@User('sub') sub: string): Promise<void> {
    await this.authService.logout(Number(sub));
  }

  @UseGuards(JwtRtGuard)
  @Post('refresh')
  @HttpCode(HttpStatus.OK)
  public async refresh(@User() user:JwtPayload): Promise<Tokens> {
    return await this.authService.refresh(
      Number(user.sub),
      user?.refreshToken as string,
    );
  }

}
