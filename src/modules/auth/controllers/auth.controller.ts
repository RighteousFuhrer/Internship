import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { JwtRtGuard } from '../../../common/guards/jwt-rt.guard';
import { AuthDto } from '../dtos/auth.dto';
import { CreateUserDto } from '../dtos/createUser.dto';
import { AuthService } from '../services/auth.service';
import {
  RequestWithRefreshToken,
  RequestWithToken,
} from '../types/tokens.type';
import { JwtAtGuard } from 'src/common/guards/jwt-at.guard';

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
  public async logout(@Req() req: RequestWithToken): Promise<void> {
    await this.authService.logout(Number(req.user['sub']));
  }

  @UseGuards(JwtRtGuard)
  @Post('refresh')
  @HttpCode(HttpStatus.OK)
  public async refresh(@Req() req: RequestWithRefreshToken): Promise<Tokens> {
    return await this.authService.refresh(
      Number(req.user['sub']),
      req.user['refreshToken'],
    );
  }

}