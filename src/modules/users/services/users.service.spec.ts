import {
  BadRequestException,
  ForbiddenException,
  NotFoundException,
} from '@nestjs/common';
import { Test } from '@nestjs/testing';
import * as bcrypt from 'bcrypt';
import { UserRepository } from '../repositories/user.repository';
import { defaultUser } from '../utils/DefaultUser';
import { mockUsersRepository } from '../repositories/user.repository.mock';
import { UsersService } from './users.service.abstract';
import { UsersServiceImpl } from './users.service';

describe('UsersService', () => {
  let service: UsersService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        { provide: UsersService, useClass: UsersServiceImpl },
        { provide: UserRepository, useValue: mockUsersRepository },
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return a user', () => {
    expect(service.findOneByEmail('example@mail.com')).resolves.toEqual(
      defaultUser,
    );
  });

  it('should return a user', () => {
    const id = '1';
    expect(service.findOneById(id)).resolves.toEqual(defaultUser);
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
      ...defaultUser,
      ...dto,
      id: 2,
    });
  });

  it('should update a user', () => {
    const id = '1';
    const dto = {
      email: 'example@mail.com',
      password: bcrypt.hashSync('password', 10),
      first_name: 'John',
      last_name: 'Doe',
      image: Buffer.from('', 'base64'),
    };
    expect(service.updateUser(id, dto)).resolves.toEqual({
      ...defaultUser,
      ...dto,
    });
  });

  it('should delete a user', () => {
    const id = '1';
    expect(service.deleteUser(id)).resolves.toEqual(undefined);
  });

  it('should validate a user', () => {
    const dto = {
      email: 'example@mail.com',
      password: 'password',
    };
    expect(service.validateUser(dto)).resolves.toEqual(defaultUser);
  });

  it('should return an exception', () => {
    expect(service.findOneByEmail('')).rejects.toEqual(
      new NotFoundException('User not found'),
    );
  });

  it('should return an exception', () => {
    const id = '3';

    expect(service.findOneById(id)).rejects.toEqual(
      new NotFoundException('User not found'),
    );
  });

  it('should throw an exception', (): void => {
    const id = '2';
    const dto = {
      email: 'example@mail.com',
      password: bcrypt.hashSync('password', 10),
      first_name: 'John',
      last_name: 'Doe',
      image: Buffer.from('', 'base64'),
    };
    expect(service.updateUser(id, dto)).rejects.toEqual(
      new NotFoundException('User not found'),
    );
  });

  it('should throw an exception', (): void => {
    const id = '2';

    expect(service.deleteUser(id)).rejects.toEqual(
      new BadRequestException('Failed to delete'),
    );
  });

  it('should throw an exception', (): void => {
    const dto = {
      email: 'example@mail',
      password: 'password',
    };
    expect(service.validateUser(dto)).rejects.toEqual(
      new NotFoundException('User not found'),
    );
  });

  it('should throw an exception', (): void => {
    const dto = {
      email: 'example@mail.com',
      password: 'passwo',
    };
    expect(service.validateUser(dto)).rejects.toEqual(
      new ForbiddenException('Invalid password'),
    );
  });
});
