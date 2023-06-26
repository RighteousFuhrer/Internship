import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { Product } from '../entities/product.entity';

@Injectable()
export class ProductRepository extends Repository<Product> {

  constructor(
    _dataSource: DataSource,
  ) {
    super(Product, _dataSource.createEntityManager());
  }

  public async searchByName(name: string): Promise<Product[]> {
    const products = <Promise<Product[]>>this.query(`
    SELECT * FROM product
    WHERE product.name ILIKE '%${name}%'
    `);

    return products;
  }

}
