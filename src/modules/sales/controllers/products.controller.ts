import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
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

  @Get(':categoryId')
  public async getAllByCategory(@Param() categoryId: string): Promise<Product[]> {
    return this._productsService.findAllByCategory(categoryId);
  }

  @Get(':id')
  public async getOne(@Param() id: string): Promise<Product[]> {
    return this._productsService.findOne(id);
  }

  @Post()
  public async create(@Body() dto: CreateProductDto): Promise<Product> {
    dto;
    return this._productsService.create(dto);
  }

  @Delete()
  public async delete(@Param() id: string): Promise<void> {
    await this._productsService.delete(id);
  }

}
