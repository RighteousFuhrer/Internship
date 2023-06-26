import { userDefault } from '../utils/user.default';

import type { CreateUserDto } from '../dtos/createUser.dto';
import type { User } from '../entities/user.entity';

type FindSchema = {
  where: {
    id?: string;
    email?: string;
  };
};

type UpdateResult = {
  affected?: number;
};

export const usersRepositoryMock = {
  findOne: jest.fn(async ({ where }: FindSchema): Promise<User | null> => {
    if (where.id === userDefault.id || where.email === userDefault.email) {
      return await userDefault;
    }

    return null;
  }),

  create: jest.fn(async (dto: CreateUserDto): Promise<User> => {
    return await {
      ...userDefault,
      ...dto,
      id: '2',
    };
  }),

  save: jest.fn(async (user: User): Promise<User> => {
    return await user;
  }),

  delete: jest.fn(async (id: string): Promise<UpdateResult> => {
    if (id !== userDefault.id) {
      return await { affected: 0 };
    }
    return await { affected: 1 };
  }),
};
