import { Test } from '@nestjs/testing';
import { CategoryRepository } from '../../repositories/category.repository';
import { categoryRepositoryMock } from '../../repositories/category.repository.mock';
import { CategoriesServiceImpl } from './categories.service';
import { CategoriesService } from './categories.service.abstract';
import { categoryDefault } from '../../utils/category.default';
import { BadRequestException, UnprocessableEntityException } from '@nestjs/common';

import type { CreateCategoryDto } from '../../dtos/CreateCategory.dto';

describe('CategoriesService', () => {
  let service: CategoriesService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        { provide: CategoriesService, useClass: CategoriesServiceImpl },
        { provide: CategoryRepository, useValue: categoryRepositoryMock },
      ],
    }).compile();

    service = module.get<CategoriesService>(CategoriesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return and array of categories', async () => {
    expect(await service.findAll()).toEqual([categoryDefault]);
  });

  it('should return created category', async () => {
    const dto: CreateCategoryDto = {
      image: Buffer.from(''),
      name: 'New Category',
    };

    expect(await service.create(dto)).toEqual({ ...categoryDefault, ...dto });
  });

  it('should delete a category', () => {
    const id = '1';

    expect(service.delete(id)).resolves.toEqual(undefined);
  });

  it('should throw an error', () => {
    const dto: CreateCategoryDto = {
      image: Buffer.from(''),
      name: '',
    };

    expect(service.create(dto)).rejects.toEqual(new UnprocessableEntityException('Failed to create category'));
  });
  it('should throw an error', () => {
    const id = '2';

    expect(service.delete(id)).rejects.toEqual(new BadRequestException('Failed to delete'));
  });
});
