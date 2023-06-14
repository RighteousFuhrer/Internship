import { Test } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersService } from '../services/users.service';
import type { TestingModule } from '@nestjs/testing';
import { BadRequestException, NotFoundException } from '@nestjs/common';

import type { UpdateUserDto } from '../dtos/update.user.dto';

describe('UsersController', () => {

  let controller: UsersController;

  const mockUser = {
    id:1,
    email: 'example@mail',
    first_name: 'John',
    last_name: 'Doe',
    password: 'password',
    image: Buffer.from('', 'base64'),
    hashedRt: '',
  };

  const mockUsersService = {
    findOneById: jest.fn( (id:number) => {
      if(id === mockUser.id) {
        return mockUser;
      }
      return null;
    }),
    updateUser: jest.fn( (id:number, dto:UpdateUserDto) => {
      if(id !== mockUser.id) {
        throw new NotFoundException('User not found');
      }

      return { ...mockUser, ...dto };
    }),
    deleteUser : (id : number) : void => {
      if(id !== mockUser.id) {
        throw new BadRequestException('Failed to delete');
      }
    },
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [UsersService],
    }).overrideProvider(UsersService).useValue(mockUsersService).compile();

    controller = module.get<UsersController>(UsersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return a user', () : void => {
    expect(controller.findOne(1)).resolves.toBe(mockUser);
  });

  it('should update a user', () : void => {
    const dto = {
      email: 'new@mail.com',
      first_name: 'New first',
      last_name: 'New last',
      password: 'new pass',
      image: Buffer.from('', 'base64'),
    };
    const id = 1;

    expect(controller.update(dto, id)).resolves.toEqual({ ...mockUser, ...dto });
  });

  it('should delete a user', () : void => {
    expect(controller.delete(1)).resolves.toEqual(undefined);
  });

  it('should throw an exception', () : void => {
    expect(controller.findOne(2)).rejects.toEqual(new NotFoundException());
  });

  it('should throw an exception', () : void => {
    const dto = {
      email: 'new@mail.com',
      first_name: 'New first',
      last_name: 'New last',
      password: 'new pass',
      image: Buffer.from('', 'base64'),
    };
    expect(controller.update(dto,2)).rejects.toEqual(new NotFoundException('User not found'));
  });

});
