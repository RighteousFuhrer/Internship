import { Injectable } from '@nestjs/common';

import type { CreateProductDto } from '../../dtos/createProduct.dto';
import type { ProductSearchParams } from '../../dtos/searchByCategoryId.dto';
import type { Product } from '../../entities/product.entity';

@Injectable()
export abstract class ProductsService {

  public abstract findOne(id: string): Promise<Product>;

  public abstract findAll(params?: ProductSearchParams): Promise<Product[]>;

  public abstract create(dto: CreateProductDto): Promise<Product>;

  public abstract delete(id: string): Promise<void>;

}
