import { Injectable } from '@nestjs/common';

import type { User } from '../entities/user.entity';
import type { CreateUserDto } from '../dtos/createUser.dto';
import type { UserDto } from '../dtos/user.dto';
import type { UpdateUserDto } from '../dtos/update.user.dto';
import type { AuthDto } from '../../auth/dtos/auth.dto';

@Injectable()
export abstract class UsersService {

  public abstract findOneByEmail (email: string): Promise<User>;

  public abstract findOneById(id: number): Promise<User>;

  public abstract createUser(createUserDto: CreateUserDto): Promise<UserDto>;

  public abstract updateUser(
    id: number,
    updateUserDto: UpdateUserDto,
  ): Promise<UserDto>;

  public abstract deleteUser(id: number): Promise<void>;

  public abstract validateUser(dto: AuthDto): Promise<UserDto>;

}
