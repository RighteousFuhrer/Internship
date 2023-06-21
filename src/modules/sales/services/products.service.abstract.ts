import { Injectable } from '@nestjs/common';

import type { CreateProductDto } from '../dtos/createProduct.dto';
import type { Product } from '../entities/product.entity';

@Injectable()
export abstract class ProductsService {

  public abstract findOne(id: string): Promise<Product>;

  public abstract findAllByCategory(id: string): Promise<Product[]>;

  public abstract searchByName(name: string): Promise<Product[]>;

  public abstract findAll(): Promise<Product[]>;

  public abstract create(dto: CreateProductDto): Promise<Product>;

  public abstract delete(id: string): Promise<void>;

}
