import { Injectable } from '@nestjs/common';

import type { CreateCategoryDto } from '../../dtos/CreateCategory.dto';
import type { CategoryDto } from '../../dtos/category.dto';

@Injectable()
export abstract class CategoriesService {

  public abstract findAll(): Promise<CategoryDto[]>;

  public abstract create(dto: CreateCategoryDto): Promise<CategoryDto>;

  public abstract delete(id: string): Promise<void>;

}
