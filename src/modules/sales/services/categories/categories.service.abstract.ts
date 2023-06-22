import { Injectable } from '@nestjs/common';

import type { CreateCategoryDto } from '../../dtos/CreateCategory.dto';
import type { Category } from '../../entities/category.entity';

@Injectable()
export abstract class CategoriesService {

  public abstract findAll(): Promise<Category[]>;

  public abstract create(dto: CreateCategoryDto): Promise<Category>;

  public abstract delete(id: string): Promise<void>;

}
