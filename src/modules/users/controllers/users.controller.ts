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
} from '@nestjs/common';
import { UpdateUserDto } from '../dtos/update.user.dto';
import { UsersService } from '../utils/UsersService';

import type { UserDto } from '../dtos/user.dto';

@Controller('users')
export class UsersController {

  constructor(private usersService: UsersService) {}

  @Get('')
  @HttpCode(HttpStatus.OK)
  public async findOne(@Param() id: number): Promise<UserDto> {
    const user = await this.usersService.findOneById(Number(id));

    if (!user) {
      throw new NotFoundException();
    }

    return user;
  }

  @Put('')
  @HttpCode(HttpStatus.OK)
  public async update(
    @Body() dto: UpdateUserDto,
    @Param() id: number,
  ): Promise<UserDto> {
    return await this.usersService.updateUser(id, dto);
  }

  @Delete('')
  @HttpCode(HttpStatus.OK)
  public async delete(@Param() id: number): Promise<void> {
    await this.usersService.deleteUser(id);
  }

}
