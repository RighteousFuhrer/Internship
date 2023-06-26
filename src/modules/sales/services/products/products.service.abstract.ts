import { Injectable } from '@nestjs/common';

import type { CreateProductDto } from '../../dtos/createProduct.dto';
import type { ProductDto } from '../../dtos/product.dto';
import type { ProductSearchParams } from '../../dtos/searchByCategoryId.dto';

@Injectable()
export abstract class ProductsService {

  public abstract findOne(id: string): Promise<ProductDto>;

  public abstract findAll(params?: ProductSearchParams): Promise<ProductDto[]>;

  public abstract create(dto: CreateProductDto): Promise<ProductDto>;

  public abstract delete(id: string): Promise<void>;

}
