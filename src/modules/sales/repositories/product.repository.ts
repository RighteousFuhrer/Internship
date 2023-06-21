import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { Product } from '../entities/product.entity';
import { CategoryRepository } from './category.repository';

import type { CreateProductDto } from '../dtos/createProduct.dto';

@Injectable()
export class ProductRepository extends Repository<Product> {

  constructor(
    _dataSource: DataSource,
    private readonly _categoryRepo: CategoryRepository,
  ) {
    super(Product, _dataSource.createEntityManager());
  }

  public async createProduct(dto: CreateProductDto): Promise<Product> {
    const product = await this.create(dto);

    product.category = await this._categoryRepo.findOne({
      where: {
        id: dto.categoryId,
      },
    });

    return this.save(product);
  }

  public async searchByName(name: string): Promise<Product[]> {
    const products = <Promise<Product[]>>this.query(`
    SELECT * FROM product
    WHERE LOWER(product.name) LIKE LOWER('%${name}%')
    `);

    return products;
  }

}
