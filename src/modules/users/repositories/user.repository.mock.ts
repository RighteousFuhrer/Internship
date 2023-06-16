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

export const mockUsersRepository = {

  findOne: jest.fn(async ({ where }: FindSchema): Promise<User | null> => {
    if (where.id === defaultUser.id || where.email === defaultUser.email) {
      return await defaultUser;
    }

    return null;
  }),

  create: jest.fn(async (dto: CreateUserDto): Promise<User> => {
    return await {
      ...defaultUser,
      ...dto,
      id: 2,
    };
  }),

  save: jest.fn(async (user: User): Promise<User> => {
    return await user;
  }),

  delete: jest.fn(async (id: number): Promise<UpdateResult> => {
    if (id !== defaultUser.id) {
      return await { affected: 0 };
    }
    return await { affected: 1 };
  }),

};
