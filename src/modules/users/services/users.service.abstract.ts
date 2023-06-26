import { Injectable } from '@nestjs/common';

import type { AuthDto } from '../../auth/dtos/auth.dto';
import type { CreateUserDto } from '../dtos/createUser.dto';
import type { UpdateUserDto } from '../dtos/update.user.dto';
import type { UserDto } from '../dtos/user.dto';

@Injectable()
export abstract class UsersService {

  public abstract findOneByEmail (email: string): Promise<UserDto>;

  public abstract findOneById(id: string): Promise<UserDto>;

  public abstract createUser(createUserDto: CreateUserDto): Promise<UserDto>;

  public abstract updateUser(
    id: string,
    updateUserDto: UpdateUserDto,
  ): Promise<UserDto>;

  public abstract deleteUser(id: string): Promise<void>;

  public abstract validateUser(dto: AuthDto): Promise<UserDto>;

  public abstract validateToken(id: string, rt: string): Promise<UserDto>;

  public abstract updateToken(id: string, rt: string | null): Promise<boolean>;

}
