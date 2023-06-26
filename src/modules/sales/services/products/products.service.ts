import {
  BadRequestException,
  Injectable,
  NotFoundException,
  UnprocessableEntityException,
} from '@nestjs/common';
import { CategoryRepository } from '../../repositories/category.repository';
import { ProductRepository } from '../../repositories/product.repository';

import type { CreateProductDto } from '../../dtos/createProduct.dto';
import type { ProductSearchParams } from '../../dtos/searchByCategoryId.dto';
import type { Product } from '../../entities/product.entity';
import type { ProductsService } from './products.service.abstract';
import type { ProductDto } from '../../dtos/product.dto';

@Injectable()
export class ProductsServiceImpl implements ProductsService {

  constructor(
    private readonly _productRepo: ProductRepository,
    private readonly _categoryRepo: CategoryRepository,
  ) {}

  public async findOne(id: string): Promise<ProductDto> {
    const product = await this._productRepo.findOne({
      where: {
        id: id,
      },
    });

    if (!product) throw new NotFoundException('Product not found');

    return product;
  }

  public async findAll(params?: ProductSearchParams): Promise<ProductDto[]> {
    let products: Product[] = [];

    if (params && params.categoryId) {
      products = await this._productRepo.find({
        where: {
          category: {
            id: params.categoryId,
          },
        },
      });
    } else if(params && params.name) {
      products = await this._productRepo.searchByName(params.name);
    } else {
      products = await this._productRepo.find();
    }
    if (!products || !products.length)
      throw new NotFoundException('Products not found');

    return products;
  }

  public async create(dto: CreateProductDto): Promise<ProductDto> {
    const category = await this._categoryRepo.findOne({
      where: {
        id: dto.categoryId,
      },
    });

    if (!category) {
      throw new NotFoundException();
    }

    const productModel = this._productRepo.create(dto);
    productModel.category = category;

    const product = await this._productRepo.save(productModel);

    if (!product)
      throw new UnprocessableEntityException('Failed to create product');

    return product;
  }

  public async delete(id: string): Promise<void> {
    const res = await this._productRepo.delete({ id });

    if (!res.affected) throw new BadRequestException('Failed to delete');
  }

}
