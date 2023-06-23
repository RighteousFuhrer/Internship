import { Test } from '@nestjs/testing';
import { ProductRepository } from '../../repositories/product.repository';
import { productRepositoryMock } from '../../repositories/product.repository.mock';
import { ProductsServiceImpl } from './products.service';
import { ProductsService } from './products.service.abstract';
import { productDefault } from '../../utils/product.default';
import { BadRequestException, NotFoundException, UnprocessableEntityException } from '@nestjs/common';
import { CategoryRepository } from '../../repositories/category.repository';
import { categoryRepositoryMock } from '../../repositories/category.repository.mock';

import type { CreateProductDto } from '../../dtos/createProduct.dto';

describe('CategoriesService', () => {
  let service: ProductsService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        { provide: ProductsService, useClass: ProductsServiceImpl },
        { provide: ProductRepository, useValue: productRepositoryMock },
        { provide: CategoryRepository, useValue: categoryRepositoryMock },
      ],
    }).compile();

    service = module.get<ProductsService>(ProductsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return a product', async () => {
    const id = '1';

    expect(await service.findOne(id)).toEqual(productDefault);
  });

  it('should return an array of products', async () => {
    expect(await service.findAll()).toEqual([productDefault]);
  });

  it('should return an array of products', async () => {
    const params = {
      categoryId: '1',
    };

    expect(await service.findAll(params)).toEqual([productDefault]);
  });

  it('should return an array of products', async () => {
    const params = {
      name: 'Default',
    };

    expect(await service.findAll(params)).toEqual([productDefault]);
  });

  it('should return created category', async () => {
    const dto: CreateProductDto = {
      image: Buffer.from(''),
      name: 'New Category',
      categoryId: '1',
      price: 100,
    };

    expect(await service.create(dto)).toEqual({ ...productDefault, ...dto });
  });

  it('should delete a product', () => {
    const id = '1';

    expect(service.delete(id)).resolves.toEqual(undefined);
  });

  it('should throw an error', () => {
    const id = '2';

    expect(service.findOne(id)).rejects.toEqual(new NotFoundException('Product not found'));
  });

  it('should throw an error', () => {
    const params = {
      categoryId: '2',
    };

    expect(service.findAll(params)).rejects.toEqual(new NotFoundException('Products not found'));
  });

  it('should throw an error', () => {
    const params = {
      name: 'wrong',
    };

    expect(service.findAll(params)).rejects.toEqual(new NotFoundException('Products not found'));
  });

  it('should throw an error', () => {
    const dto: CreateProductDto = {
      image: Buffer.from(''),
      name: 'New Category',
      categoryId: '6',
      price: 100,
    };

    expect(service.create(dto)).rejects.toEqual(new NotFoundException());
  });

  it('should throw an error', () => {
    const dto: CreateProductDto = {
      image: Buffer.from(''),
      name: '',
      categoryId: '1',
      price: 100,
    };

    expect(service.create(dto)).rejects.toEqual(new UnprocessableEntityException('Failed to create product'));
  });

  it('should throw an error', () => {
    const id = '2';

    expect(service.delete(id)).rejects.toEqual(new BadRequestException('Failed to delete'));
  });
});
