import {
  BadRequestException,
  ForbiddenException,
  NotFoundException,
} from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { userDefault } from '../utils/user.default';

import type { UpdateUserDto } from '../dtos/update.user.dto';
import type { UserDto } from '../dtos/user.dto';
import type { CreateUserDto } from '../dtos/createUser.dto';
import type { UsersService } from './users.service.abstract';
import type { AuthDto } from '../../auth/dtos/auth.dto';
import type { User } from '../entities/user.entity';

export class UsersServiceMock implements UsersService {

  public async findOneById(id: string): Promise<User> {
    if (id !== userDefault.id) throw new NotFoundException('User not found');

    return await userDefault;
  }

  public async findOneByEmail(email: string): Promise<User> {
    if (email !== userDefault.email)
      throw new NotFoundException('User not found');

    return await userDefault;
  }

  public async createUser(createUserDto: CreateUserDto): Promise<UserDto> {
    return await { ...userDefault, ...createUserDto };
  }

  public async updateUser(id: string, dto: UpdateUserDto): Promise<User> {
    if (id !== userDefault.id) throw new NotFoundException('User not found');

    return await { ...userDefault, ...dto };
  }

  public async deleteUser(id: string): Promise<void> {
    if (id !== userDefault.id) {
      throw await new BadRequestException('Failed to delete');
    }
  }

  public async validateUser(dto: AuthDto): Promise<UserDto> {
    if (dto.email !== userDefault.email) {
      throw new NotFoundException('Email not found');
    }

    const passwordsMatches = await bcrypt.compare(
      dto.password,
      userDefault.password,
    );

    if (!passwordsMatches) {
      throw new ForbiddenException('Invalid password');
    }

    return userDefault;
  }

  public async validateToken(id: string, rt: string): Promise<UserDto> {
    if (id !== userDefault.id) throw new NotFoundException('User not found');

    if (!userDefault.hashedRt) throw new ForbiddenException('Token expired');

    const rtMathes = await bcrypt.compare(rt, userDefault.hashedRt);

    if (!rtMathes) throw new ForbiddenException('Invalid refresh token');

    return userDefault;
  }

  public async updateToken(id: string, rt: string | null): Promise<boolean> {
    if (id !== userDefault.id) throw new NotFoundException('User not found');

    if (rt) return await true;

    return await false;
  }

}
