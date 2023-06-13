import { ForbiddenException, Injectable } from '@nestjs/common';
import { User } from '../entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { NotFoundException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

import type { CreateUserDto } from '../dtos/createUser.dto';
import type { AuthDto } from '../dtos/auth.dto';
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

  public async create(createUserDto: CreateUserDto): Promise<UserDto> {
    const user = await this.userRepo.create(createUserDto);

    return this.userRepo.save(user);
  }

  public async validateUser(dto: AuthDto) : Promise<UserDto> {
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

  public async validateToken(id:number, rt:string) : Promise<UserDto> {
    const user = await this.findOneById(id);

    if(!user) throw new NotFoundException('User not found');

    if(!user.hashedRt) throw new ForbiddenException('Token expired');

    const rtMathes = await bcrypt.compare(rt, user.hashedRt);

    if(!rtMathes) throw new ForbiddenException('Invalid refresh token');

    return user;
  }

  public async updateToken(id: number, rt: string | null ): Promise<boolean> {
    const user = await this.userRepo.findOne({ where: { id } });

    if (!user) throw new NotFoundException();

    let newRt : string | null = null;

    if(rt) {
      newRt = await bcrypt.hash(rt,10);
    }

    await this.userRepo.update(id, { ...user, hashedRt: newRt });

    return true;
  }

}
