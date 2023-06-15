import { Injectable } from '@nestjs/common';
import { defaultUser } from '../utils/DefaultUser';

import type { CreateUserDto } from '../dtos/createUser.dto';
import type { User } from '../entities/user.entity';

type FindSchema = {
  where: {
    id?: number;
    email?: string;
  };
};

type UpdateResult = {
  affected?: number;
};

@Injectable()
export class MockUsersRepository {

  private _user: User;

  constructor() {
    this._user = defaultUser;
  }

  public async findOne({ where }: FindSchema): Promise<User | null> {
    if (where.id === this._user.id || where.email === this._user.email) {
      return await this._user;
    }

    return null;
  }

  public async create(dto: CreateUserDto): Promise<User> {
    return await {
      ...this._user,
      ...dto,
      id: 2,
    };
  }

  public async save(user: User): Promise<User> {
    return await user;
  }

  public async delete(id: number): Promise<UpdateResult> {
    if (id !== this._user.id) {
      return await { affected: 0 };
    }
    return await { affected: 1 };
  }

}
