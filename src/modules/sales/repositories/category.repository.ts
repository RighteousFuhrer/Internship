import { Injectable } from '@nestjs/common';
import { Category } from '../entities/category.entity';
import { DataSource, Repository } from 'typeorm';

@Injectable()
export class CategoryRepository extends Repository<Category> {

  constructor(_dataSource: DataSource) {
    super(Category, _dataSource.createEntityManager());
  }

}
