import { userFirst, userSecond } from '../utils/user.default';

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
    if (where.id === userFirst.id || where.email === userFirst.email) {
      return await userFirst;
    } else if (where.id === userSecond.id || where.email === userSecond.email) {
      return await userSecond;
    }
    return null;
  }),

  create: jest.fn(async (dto: CreateUserDto): Promise<User> => {
    return await {
      ...userFirst,
      ...dto,
      id: '2',
    };
  }),

  save: jest.fn(async (user: User): Promise<User> => {
    return await user;
  }),

  delete: jest.fn(async (id: string): Promise<UpdateResult> => {
    if (id !== userFirst.id) {
      return await { affected: 0 };
    }
    return await { affected: 1 };
  }),
};
