import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ApiParam, ApiTags } from '@nestjs/swagger';
import { CreateCategoryDto } from '../dtos/CreateCategory.dto';
import { CategoriesService } from '../services/categories.service.abstract';

import type { CategoryDto } from '../dtos/category.dto';

@ApiTags('Categories')
@Controller('categories')
export class CategoriesController {

  constructor(private readonly _categoriesService: CategoriesService) {}

  @Get()
  public async getAll(): Promise<CategoryDto[]> {
    return this._categoriesService.findAll();
  }

  @Post()
  public async create(@Body() dto: CreateCategoryDto): Promise<CategoryDto> {
    dto;
    return this._categoriesService.create(dto);
  }

  @ApiParam({
    name: 'id',
    type: 'string',
    description: 'Id of category to be deleted',
    required: true,
  })
  @Delete()
  public async delete(@Param()  params: { id: string } ): Promise<void> {
    await this._categoriesService.delete(params.id);
  }

}
