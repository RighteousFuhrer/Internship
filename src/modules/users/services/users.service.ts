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
import type { UsersService } from './users.service.abstract';

@Injectable()
export class UsersServiceImpl implements UsersService {

  constructor(private readonly _userRepo: UserRepository) {}

  public async findOneByEmail(email: string): Promise<UserDto> {
    const user = await this._userRepo.findOne({
      where: {
        email,
      },
    });

    if (!user) throw new NotFoundException('User not found');

    return user;
  }

  public async findOneById(id: string): Promise<UserDto> {
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
    id: string,
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

  public async deleteUser(id: string): Promise<void> {
    const delRes = await this._userRepo.delete(id);

    if (!delRes.affected) throw new BadRequestException('Failed to delete');
  }

  public async validateUser(dto: AuthDto): Promise<UserDto> {
    const user = await this._userRepo.findOne({ where: { email: dto.email } });

    if (!user) {
      throw new NotFoundException('Email not found');
    }

    const passwordsMatches = await bcrypt.compare(dto.password, user.password);

    if (!passwordsMatches) {
      throw new ForbiddenException('Invalid password');
    }

    return user;
  }

  public async validateToken(id: string, rt: string): Promise<UserDto> {
    const user = await this.findOneById(id);

    if (!user) throw new NotFoundException('User not found');

    if (!user.hashedRt) throw new ForbiddenException('Token expired');

    const rtMathes = await bcrypt.compare(rt, user.hashedRt);

    if (!rtMathes) throw new ForbiddenException('Invalid refresh token');

    return user;
  }

  public async updateToken(id: string, rt: string | null): Promise<boolean> {
    const user = await this._userRepo.findOne({ where: { id } });

    if (!user) throw new NotFoundException('User not found');

    let newRt: string | null = null;

    if (rt) {
      newRt = await bcrypt.hash(rt, 10);
      if (rt) {
        newRt = await bcrypt.hash(rt, 10);
      }

      await this._userRepo.save({ ...user, hashedRt: newRt });
      return true;
    }

    return false;
  }

}
