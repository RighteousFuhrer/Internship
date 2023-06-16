import {
  BadRequestException,
  ForbiddenException,
  NotFoundException,
} from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { defaultUser } from '../utils/DefaultUser';

import type { UpdateUserDto } from '../dtos/update.user.dto';
import type { UserDto } from '../dtos/user.dto';
import type { CreateUserDto } from '../dtos/createUser.dto';
import type { UsersService } from './UsersService';
import type { AuthDto } from '../../auth/dtos/auth.dto';
import type { User } from '../entities/user.entity';

export class MockUsersService implements UsersService {

  public async findOneById(id: number): Promise<User> {
    if (id !== defaultUser.id) throw new NotFoundException('User not found');

    return await defaultUser;
  }

  public async findOneByEmail(email: string): Promise<User> {
    if (email !== defaultUser.email)
      throw new NotFoundException('User not found');

    return await defaultUser;
  }

  public async createUser(createUserDto: CreateUserDto): Promise<UserDto> {
    return await { ...defaultUser, ...createUserDto };
  }

  public async updateUser(id: number, dto: UpdateUserDto): Promise<User> {
    if (id !== defaultUser.id) throw new NotFoundException('User not found');

    return await { ...defaultUser, ...dto };
  }

  public async deleteUser(id: number): Promise<void> {
    if (id !== defaultUser.id) {
      throw await new BadRequestException('Failed to delete');
    }
  }

  public async validateUser(dto: AuthDto): Promise<UserDto> {
    if (dto.email !== defaultUser.email) {
      throw new NotFoundException('Email not found');
    }

    const passwordsMatches = await bcrypt.compare(
      dto.password,
      defaultUser.password,
    );

    if (!passwordsMatches) {
      throw new ForbiddenException('Invalid password');
    }

    return defaultUser;
  }

}
