import { BadRequestException, Injectable } from '@nestjs/common';
import { ProductRepository } from '../repositories/product.repository';

import type { CreateProductDto } from '../dtos/createProduct.dto';
import type { ProductsService } from './products.service.abstract';
import type { Product } from '../entities/product.entity';

@Injectable()
export class ProductsServiceImpl implements ProductsService {

  constructor(private readonly _productRepo: ProductRepository) {}

  public async findOne(id: string): Promise<Product[]> {
    const categories = await this._productRepo.find({
      where: {
        id: id,
      },
    });

    return categories;
  }

  public async findAllByCategory(id: string): Promise<Product[]> {
    const categories = await this._productRepo.find({
      where: {
        category: {
          id: id,
        },
      },
    });

    return categories;
  }

  public async findAll(): Promise<Product[]> {
    const categories = await this._productRepo.find();

    return categories;
  }

  public async create(dto:  CreateProductDto): Promise<Product> {
    const category = await this._productRepo.create(dto);

    return category;
  }

  public async delete(id: string): Promise<void> {
    const res = await this._productRepo.delete({ id });

    if (!res.affected) throw new BadRequestException('Failed to delete');
  }

}
