import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';

import type { AuthDto } from '../dtos/auth.dto';
import type { CreateUserDto } from '../dtos/createUser.dto';
import type { UpdateUserDto } from '../dtos/update.user.dto';
import type { UserDto } from '../dtos/user.dto';

@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(User) private readonly userRepo: Repository<User>,
  ) {}

  public async findOneByEmail(email: string): Promise<User | null> {
    const user = await this.userRepo.findOne({
      where: {
        email,
      },
    });

    return user;
  }

  public async findOneById(id: number): Promise<User | null> {
    const user = await this.userRepo.findOne({
      where: {
        id,
      },
    });

    return user;
  }

  public async createUser(createUserDto: CreateUserDto): Promise<UserDto> {
    const user = await this.userRepo.create(createUserDto);

    return this.userRepo.save(user);
  }
  public async updateUser(
    id: number,
    updateUserDto: UpdateUserDto,
  ): Promise<UserDto> {
    const updRes = await this.userRepo.update(id, updateUserDto);

    if (!updRes.affected) throw new BadRequestException('Failed to update');

    const user = await this.userRepo.findOne({ where: { id } });

    if(!user) throw new NotFoundException('User not found');

    return user;
  }

  public async deleteUser(
    id: number,
  ): Promise<void> {
    const delRes = await this.userRepo.delete(id);

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
