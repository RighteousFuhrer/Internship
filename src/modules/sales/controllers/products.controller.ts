import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ApiParam, ApiTags } from '@nestjs/swagger';
import { CreateProductDto } from '../dtos/createProduct.dto';
import { ProductSearchParams } from '../dtos/searchByCategoryId.dto';
import { SearchByIdDto } from '../dtos/serachById.dto';
import { ProductsService } from '../services/products/products.service.abstract';

import type { ProductDto } from '../dtos/product.dto';

@ApiTags('Products')
@Controller('products')
export class ProductsController {

  constructor(private readonly _productsService: ProductsService) {}

  @ApiParam({
    name: 'categoryId',
    type: 'string',
    description: 'Id of product`s category',
    required: false,
  })
  @ApiParam({
    name: 'name',
    type: 'string',
    description: 'Product name',
    required: false,
  })
  @Get('/')
  public async getAll(
    @Param() params: ProductSearchParams,
  ): Promise<ProductDto[]> {
    return this._productsService.findAll(params);
  }

  @ApiParam({
    name: 'id',
    type: 'string',
    description: 'Id of product',
    required: true,
  })
  @Get('/:id')
  public async getOne(@Param() params: SearchByIdDto): Promise<ProductDto> {
    return this._productsService.findOne(params.id);
  }

  @Post()
  public async create(@Body() dto: CreateProductDto): Promise<ProductDto> {
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
  public async delete(@Param() params: SearchByIdDto): Promise<void> {
    await this._productsService.delete(params.id);
  }

}
