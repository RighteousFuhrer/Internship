import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
} from '@nestjs/common';
import { CreateUserDto } from '../dtos/createUser.dto';
import { UsersService } from '../services/users.service';

import type { UserDto } from '../dtos/user.dto';

@Controller('users')
export class UsersController {

  constructor(private usersService: UsersService) {}

  @Get(':id')
  public async findById(@Param() id: number): Promise<UserDto> {
    const user = await this.usersService.findOneById(id);
    if (!user) {
      throw new NotFoundException();
    }

    return user;
  }

  @Get(':email')
  public async findByEmail(@Param() email: string): Promise<UserDto> {
    const user = await this.usersService.findOneByEmail(email);
    if (!user) {
      throw new NotFoundException();
    }

    return user;
  }

  @Post()
  public async create(@Body() createUserDto: CreateUserDto): Promise<UserDto> {
    return this.usersService.create(createUserDto);
  }

}
