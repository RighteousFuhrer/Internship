import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { Product } from '../entities/product.entity';

@Injectable()
export class ProductRepository extends Repository<Product> {

  constructor(_dataSource: DataSource) {
    super(Product, _dataSource.createEntityManager());
  }

}
