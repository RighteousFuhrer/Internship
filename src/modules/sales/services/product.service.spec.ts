import { Test } from '@nestjs/testing';
import { ProductRepository } from '../repositories/product.repository';
import { productRepositoryMock } from '../repositories/product.repository.mock';
import { ProductsServiceImpl } from './products.service';
import { ProductsService } from './products.service.abstract';
import { productDefault } from '../utils/product.default';
import { BadRequestException, NotFoundException } from '@nestjs/common';

import type { CreateProductDto } from '../dtos/createProduct.dto';

describe('CategoriesService', () => {
  let service: ProductsService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        { provide: ProductsService, useClass: ProductsServiceImpl },
        { provide: ProductRepository, useValue: productRepositoryMock },
      ],
    }).compile();

    service = module.get<ProductsService>(ProductsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return a category', async () => {
    const id = '1';

    expect(await service.findOne(id)).toEqual(productDefault);
  });

  it('should return an array of categories', async () => {
    const id = '1';

    expect(await service.findAllByCategory(id)).toEqual([productDefault]);
  });

  it('should return an array of categories', async () => {
    expect(await service.findAll()).toEqual([productDefault]);
  });

  it('should return an array of categories', async () => {
    const name = 'Default';

    expect(await service.searchByName(name)).toEqual([productDefault]);
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

  it('should delete a category', () => {
    const id = '1';

    expect(service.delete(id)).resolves.toEqual(undefined);
  });

  it('should throw an error', () => {
    const id = '2';

    expect(service.findOne(id)).rejects.toEqual(new NotFoundException());
  });

  it('should throw an error', () => {
    const id = '2';

    expect(service.findAllByCategory(id)).rejects.toEqual(new NotFoundException('Products not found'));
  });

  it('should throw an error', () => {
    const name = 'wrong';

    expect(service.searchByName(name)).rejects.toEqual(new NotFoundException('Products not found'));
  });

  it('should throw an error', () => {
    const id = '2';

    expect(service.delete(id)).rejects.toEqual(new BadRequestException('Failed to delete'));
  });
});
