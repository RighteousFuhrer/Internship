import { Test } from '@nestjs/testing';
import { UsersService } from './users.service';
import { User } from '../entities/user.entity';
import { getRepositoryToken } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';

import type { UpdateUserDto } from '../dtos/update.user.dto';
import type { CreateUserDto } from '../dtos/createUser.dto';
import { BadRequestException, ForbiddenException, NotFoundException } from '@nestjs/common';
type findSchema = {
  where: {
    email?: string;
    id?: number;
  };
};

describe('UsersService', () => {
  let service: UsersService;

  const mockUser = {
    id: 1,
    email: 'example@mail.com',
    first_name: 'John',
    last_name: 'Doe',
    password: bcrypt.hashSync('password', 10),
    image: Buffer.from('', 'base64'),
    hashedRt: '',
  };

  const mockRepository = {
    findOne: jest.fn(async ({ where }: findSchema) => {
      if (where.id === mockUser.id || where.email === mockUser.email) {
        return await mockUser;
      }

      return null;
    }),
    create: jest.fn(async (dto: CreateUserDto) => {
      return await {
        ...dto,
        id: 2,
        hashedRt: null,
      };
    }),
    save: jest.fn(async (user: User) => {
      return await user;
    }),
    update: jest.fn(async (id: number, updateUserDto: UpdateUserDto) => {
      if (updateUserDto && id !== mockUser.id) {
        return await { affected: 0 };
      }
      return await { affected: 1 };
    }),
    delete: jest.fn(async (id: number) => {
      if (id !== mockUser.id) {
        return await { affected: 0 };
      }
      return await { affected: 1 };
    }),
  };

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        UsersService,
        { provide: getRepositoryToken(User), useValue: mockRepository },
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return a user', () => {
    expect(service.findOneByEmail('example@mail.com')).resolves.toEqual(
      mockUser,
    );
  });
  it('should return a user', () => {
    expect(service.findOneById(1)).resolves.toEqual(mockUser);
  });
  it('should create a user', () => {
    const dto = {
      email: 'example@mail.com',
      password: bcrypt.hashSync('password', 10),
      first_name: 'John',
      last_name: 'Doe',
      image: Buffer.from('', 'base64'),
    };
    expect(service.createUser(dto)).resolves.toEqual({
      ...dto,
      id: 2,
      hashedRt: null,
    });
  });
  it('should return null', () => {
    expect(service.findOneByEmail('')).resolves.toEqual(
      null,
    );
  });
  it('should return null', () => {
    expect(service.findOneById(3)).resolves.toEqual(
      null,
    );
  });
  it('should update a user', () => {
    const id = 1;
    const dto = {
      email: 'example@mail.com',
      password: bcrypt.hashSync('password', 10),
      first_name: 'John',
      last_name: 'Doe',
      image: Buffer.from('', 'base64'),
    };
    expect(service.updateUser(id, dto)).resolves.toEqual(mockUser);
  });

  it('should delete a user', () => {
    const id = 1;
    expect(service.deleteUser(id)).resolves.toEqual(undefined);
  });

  it('should validate a user', () => {
    const dto = {
      email: 'example@mail.com',
      password: 'password',
    };
    expect(service.validateUser(dto)).resolves.toEqual(mockUser);
  });

  it('should throw an exception', (): void => {
    const dto = {
      email: 'example@mail.com',
      password: bcrypt.hashSync('password', 10),
      first_name: 'John',
      last_name: 'Doe',
      image: Buffer.from('', 'base64'),
    };
    const id = 2;
    expect(service.updateUser(id,dto)).rejects.toEqual(new BadRequestException('Failed to update'));
  });

  it('should throw an exception', (): void => {
    const id = 2;
    expect(service.deleteUser(id)).rejects.toEqual(new BadRequestException('Failed to delete'));
  });
  it('should throw an exception', (): void => {
    const dto = {
      email: 'example@mail',
      password: 'password',
    };
    expect(service.validateUser(dto)).rejects.toEqual(new  NotFoundException('Email not found'));
  });

  it('should throw an exception', (): void => {
    const dto = {
      email: 'example@mail.com',
      password: 'passwo',
    };
    expect(service.validateUser(dto)).rejects.toEqual(new ForbiddenException('Invalid password'));
  });
});
