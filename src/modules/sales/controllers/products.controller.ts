import { Body, Controller, Param, Post, Delete, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateCategoryDto } from '../dtos/CreateCategory.dto';
import { CategoriesServiceImpl } from '../services/categories.service';

import type { CategoryDto } from '../dtos/category.dto';

@ApiTags('Products')
@Controller('products')
export class CategoriesController {

  constructor(private readonly _categoriesService: CategoriesServiceImpl) {}

  @Get()
  public async getAll(): Promise<CategoryDto[]> {
    return this._categoriesService.findAll();
  }

  @Post()
  public async create(@Body() dto: CreateCategoryDto): Promise<CategoryDto> {
    dto;
    return this._categoriesService.create(dto);
  }

  @Delete()
  public async delete(@Param() id: string): Promise<void> {
    await this._categoriesService.delete(id);
  }

}
