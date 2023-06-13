import { Injectable } from '@nestjs/common';
import { User } from '../entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import type { CreateUserDto } from '../dtos/createUser.dto';
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

  public async create(createUserDto: CreateUserDto): Promise<User> {
    const user = await this.userRepo.create(createUserDto);

    return this.userRepo.save(user);
  }

}
