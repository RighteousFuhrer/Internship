import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { UserRepository } from '../repositories/user.repository';

import type { AuthDto } from '../../auth/dtos/auth.dto';
import type { CreateUserDto } from '../dtos/createUser.dto';
import type { UpdateUserDto } from '../dtos/update.user.dto';
import type { UserDto } from '../dtos/user.dto';
import type { User } from '../entities/user.entity';
import type { UsersService } from '../utils/UsersService';

@Injectable()
export class UsersServiceImpl implements UsersService {

  constructor(private readonly _userRepo: UserRepository) {}

  public async findOneByEmail(email: string): Promise<User> {
    const user = await this._userRepo.findOne({
      where: {
        email,
      },
    });

    if (!user) throw new NotFoundException('User not found');

    return user;
  }

  public async findOneById(id: number): Promise<User> {
    const user = await this._userRepo.findOne({
      where: {
        id,
      },
    });

    if (!user) throw new NotFoundException('User not found');

    return user;
  }

  public async createUser(createUserDto: CreateUserDto): Promise<UserDto> {
    const user = await this._userRepo.create(createUserDto);

    return this._userRepo.save(user);
  }
  public async updateUser(
    id: number,
    updateUserDto: UpdateUserDto,
  ): Promise<UserDto> {
    const user = await this._userRepo.findOne({ where: { id } });
    if (!user) throw new NotFoundException('User not found');

    const updatedUser = await this._userRepo.save({
      ...user,
      ...updateUserDto,
    });

    return updatedUser;
  }

  public async deleteUser(id: number): Promise<void> {
    const delRes = await this._userRepo.delete(id);

    if (!delRes.affected) throw new BadRequestException('Failed to delete');
  }

  public async validateUser(dto: AuthDto): Promise<UserDto> {
    const user = await this.findOneByEmail(dto.email);

    if (!user) {
      throw new NotFoundException('Email not found');
    }

    const passwordsMatches = await bcrypt.compare(dto.password, user.password);

    if (!passwordsMatches) {
      throw new ForbiddenException('Invalid password');
    }

    return user;
  }

}
