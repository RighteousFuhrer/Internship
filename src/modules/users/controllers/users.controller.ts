import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  NotFoundException,
  Param,
  Put,
  UseGuards,
} from '@nestjs/common';
import { UpdateUserDto } from '../dtos/update.user.dto';
import { UsersService } from '../interfaces/UsersService';
import { JwtAtGuard } from '../../../common/guards/jwt-at.guard';
import { RequestWithToken } from '../../auth/types/tokens.type';

import type { UserDto } from '../dtos/user.dto';

@Controller('users')
export class UsersController {

  constructor(private usersService: UsersService) {}

  @UseGuards(JwtAtGuard)
  @Get('')
  @HttpCode(HttpStatus.OK)
  public async findOne(@Param() req: RequestWithToken): Promise<UserDto> {
    const user = await this.usersService.findOneById(Number((Number(req.user.sub))));
    if (!user) {
      throw new NotFoundException();
    }

    return user;
  }

  @UseGuards(JwtAtGuard)
  @Put('')
  @HttpCode(HttpStatus.OK)
  public async update(
    @Body() dto: UpdateUserDto,
    @Param() req: RequestWithToken,
  ): Promise<UserDto> {
    return await this.usersService.updateUser(Number(req.user['sub']), dto);
  }

  @UseGuards(JwtAtGuard)
  @Delete('')
  @HttpCode(HttpStatus.OK)
  public async delete(@Param() req: RequestWithToken): Promise<void> {
    await this.usersService.deleteUser(Number(req.user));
  }

}
