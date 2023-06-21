import { productDefault } from '../utils/product.default';
import { NotFoundException } from '@nestjs/common';

import type { Product } from '../entities/product.entity';
import type { CreateProductDto } from '../dtos/createProduct.dto';

type UpdateResult = {
  affected: number;
};

type FindParams = {
  where?: {
    id?: string;
    category?: {
      id?: string;
    };
  };
};

export const productRepositoryMock = {
  find: jest.fn(async (params?: FindParams): Promise<Product[]> => {
    if (
      params &&
      params.where &&
      params.where.category &&
      params.where.category.id === productDefault.category?.id
    ) {
      return await [productDefault];
    } else if (!params) {
      return await [productDefault];
    }

    return await [];
  }),
  findOne: jest.fn(async (params: FindParams): Promise<Product> => {
    if (!params.where || !(params.where.id === productDefault.id)) {
      throw new NotFoundException();
    }
    return await productDefault;
  }),
  searchByName: jest.fn(async (name: string): Promise<Product[]> => {
    if (!name || !productDefault.name.includes(name)) {
      return [];
    }

    return await [productDefault];
  }),
  createProduct: jest.fn(async (dto: CreateProductDto): Promise<Product> => {
    return await { ...productDefault, ...dto };
  }),

  delete: jest.fn(async ({ id }: { id: string }): Promise<UpdateResult> => {
    if (id !== productDefault.id) {
      return await { affected: 0 };
    }
    return await { affected: 1 };
  }),
};
