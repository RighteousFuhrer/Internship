import { BadRequestException, Injectable } from '@nestjs/common';
import { CategoryRepository } from '../repositories/category.repository';

import type { CreateCategoryDto } from '../dtos/CreateCategory.dto';
import type { Category } from '../entities/category.entity';
import type { CategoriesService } from './categories.service.abstract';

@Injectable()
export class CategoriesServiceImpl implements CategoriesService {

  constructor(private readonly _categoryRepo: CategoryRepository) {}

  public async findAll(): Promise<Category[]> {
    const categories = await this._categoryRepo.find();

    return categories;
  }

  public async create(dto: CreateCategoryDto): Promise<Category> {
    const category = await this._categoryRepo.create(dto);

    return category;
  }

  public async delete(id: string): Promise<void> {
    const res = await this._categoryRepo.delete({ id });

    if (!res.affected) throw new BadRequestException('Failed to delete');

  }

}
