import { NotFoundException } from '@nestjs/common';
import { productDefault } from '../utils/product.default';

import type { CreateProductDto } from '../dtos/createProduct.dto';
import type { Product } from '../entities/product.entity';
import type { FindParams, UpdateResult } from '../types';

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
  create: jest.fn(async (dto: CreateProductDto): Promise<Product> => {
    return await { ...productDefault, ...dto };
  }),

  save: jest.fn(async (product: Product): Promise<Product> => {
    return await product;
  }),

  delete: jest.fn(async ({ id }: { id: string }): Promise<UpdateResult> => {
    if (id !== productDefault.id) {
      return await { affected: 0 };
    }
    return await { affected: 1 };
  }),
};
