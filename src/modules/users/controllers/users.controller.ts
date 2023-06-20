import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  NotFoundException,
  Put,
  UseGuards,
} from '@nestjs/common';
import { UpdateUserDto } from '../dtos/update.user.dto';
import { UsersService } from '../services/users.service.abstract';
import { JwtAtGuard } from '../../../framework/guards/jwt-at.guard';
import { User } from '../../../framework/decorators/user.decorator';
import { ApiTags } from '@nestjs/swagger';

import type { UserDto } from '../dtos/user.dto';

@ApiTags('Users')
@Controller('users')
export class UsersController {

  constructor(private usersService: UsersService) {}

  @UseGuards(JwtAtGuard)
  @Get('')
  @HttpCode(HttpStatus.OK)
  public async findOne(@User('sub') sub: string): Promise<UserDto> {
    const user = await this.usersService.findOneById(sub);

    if (!user) {
      throw new NotFoundException();
    }

    return user;
  }

  @UseGuards(JwtAtGuard)
  @Put('')
  @HttpCode(HttpStatus.OK)
  public async update(
    @User('sub') sub: string,
    @Body() dto: UpdateUserDto,
  ): Promise<UserDto> {
    return this.usersService.updateUser(sub, dto);
  }

  @UseGuards(JwtAtGuard)
  @Delete('')
  @HttpCode(HttpStatus.OK)
  public async delete(@User('sub') sub: string): Promise<void> {
    await this.usersService.deleteUser(sub);
  }

}
