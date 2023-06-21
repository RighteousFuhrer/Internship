import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ApiTags, ApiParam } from '@nestjs/swagger';
import { ProductsService } from '../services/products.service.abstract';
import { CreateProductDto } from '../dtos/createProduct.dto';

import type { Product } from '../entities/product.entity';

@ApiTags('Products')
@Controller('products')
export class ProductsController {

  constructor(private readonly _productsService: ProductsService) {}

  @Get()
  public async getAll(): Promise<Product[]> {
    return this._productsService.findAll();
  }

  @ApiParam({
    name: 'categoryId',
    type: 'string',
    description: 'Id of product`s category',
    required: true,
  })
  @Get('/:categoryId')
  public async getAllByCategory(
    @Param() params: { categoryId: string },
  ): Promise<Product[]> {
    return this._productsService.findAllByCategory(params.categoryId);
  }

  @ApiParam({
    name: 'id',
    type: 'string',
    description: 'Id of product',
    required: true,
  })
  @Get('/:id')
  public async getOne(@Param() params: { id: string }): Promise<Product> {
    return this._productsService.findOne(params.id);
  }

  @ApiParam({
    name: 'name',
    type: 'string',
    description: 'Query form searchin product by name',
    required: true,
  })
  @Get('search/:name')
  public async searchByName(@Param() params: { name: string }): Promise<Product[]> {
    return this._productsService.searchByName(params.name);
  }

  @Post()
  public async create(@Body() dto: CreateProductDto): Promise<Product> {
    dto;
    return this._productsService.create(dto);
  }

  @ApiParam({
    name: 'id',
    type: 'string',
    description: 'Id of product to be deleted',
    required: true,
  })
  @Delete()
  public async delete(@Param()  params: { id: string } ): Promise<void> {
    await this._productsService.delete(params.id);
  }

}
