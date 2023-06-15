import { NotFoundException } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { defaultUser } from '../utils/DefaultUser';
import { MockUsersService } from '../interfaces/MockUsersService';
import { UsersService } from '../interfaces/UsersService';
import { UsersController } from './users.controller';

import type { TestingModule } from '@nestjs/testing';

describe('UsersController', () => {
  let controller: UsersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [{ provide: UsersService, useClass: MockUsersService }],
    }).compile();

    controller = module.get<UsersController>(UsersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return a user', (): void => {
    expect(controller.findOne(1)).resolves.toBe(defaultUser);
  });

  it('should update a user', (): void => {
    const dto = {
      email: 'new@mail.com',
      first_name: 'New first',
      last_name: 'New last',
      password: 'new pass',
      image: Buffer.from('', 'base64'),
    };
    const id = 1;

    expect(controller.update(dto, id)).resolves.toEqual({
      ...defaultUser,
      ...dto,
    });
  });

  it('should delete a user', (): void => {
    expect(controller.delete(1)).resolves.toEqual(undefined);
  });

  it('should throw an exception', (): void => {
    expect(controller.findOne(2)).rejects.toEqual(
      new NotFoundException('User not found'),
    );
  });

  it('should throw an exception', (): void => {
    const dto = {
      email: 'new@mail.com',
      first_name: 'New first',
      last_name: 'New last',
      password: 'new pass',
      image: Buffer.from('', 'base64'),
    };
    expect(controller.update(dto, 2)).rejects.toEqual(
      new NotFoundException('User not found'),
    );
  });
});
