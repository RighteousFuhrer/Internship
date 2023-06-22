import { categoryDefault } from '../utils/category.default';

import type { CreateCategoryDto } from '../dtos/CreateCategory.dto';
import type { Category } from '../entities/category.entity';
import type { FindParams, UpdateResult } from '../types';

export const categoryRepositoryMock = {
  find: jest.fn(async (): Promise<Category[]> => {
    return await [categoryDefault];
  }),
  findOne: jest.fn(async (params: FindParams): Promise<Category | null> => {
    if(!params.where || params.where.id !== categoryDefault.id) {
      return null;
    }

    return await categoryDefault;
  }),
  save: jest.fn(async (dto: CreateCategoryDto): Promise<Category> => {
    return await { ...categoryDefault, ...dto };
  }),

  delete: jest.fn(async ({ id }: { id:string }): Promise<UpdateResult> => {
    if (id !== categoryDefault.id) {
      return await { affected: 0 };
    }
    return await { affected: 1 };
  }),
};
