import {
  BadRequestException,
  ForbiddenException,
  NotFoundException,
} from '@nestjs/common';
import { Test } from '@nestjs/testing';
import * as bcrypt from 'bcrypt';
import { UserRepository } from '../repositories/user.repository';
import { userDefault } from '../utils/user.default';
import { usersRepositoryMock } from '../repositories/user.repository.mock';
import { UsersService } from './users.service.abstract';
import { UsersServiceImpl } from './users.service';

describe('UsersService', () => {
  let service: UsersService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        { provide: UsersService, useClass: UsersServiceImpl },
        { provide: UserRepository, useValue: usersRepositoryMock },
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return a user', async () => {
    expect(await service.findOneByEmail('example@mail.com')).toEqual(
      userDefault,
    );
  });

  it('should return a user', async () => {
    const id = '1';
    expect(await service.findOneById(id)).toEqual(userDefault);
  });

  it('should create a user', async () => {
    const dto = {
      email: 'example@mail.com',
      password: bcrypt.hashSync('password', 10),
      first_name: 'John',
      last_name: 'Doe',
      image: Buffer.from('', 'base64'),
    };
    expect(await service.createUser(dto)).toEqual({
      ...userDefault,
      ...dto,
      id: '2',
    });
  });

  it('should update a user', async () => {
    const id = '1';
    const dto = {
      email: 'example@mail.com',
      password: bcrypt.hashSync('password', 10),
      first_name: 'John',
      last_name: 'Doe',
      image: Buffer.from('', 'base64'),
    };
    expect(await service.updateUser(id, dto)).toEqual({
      ...userDefault,
      ...dto,
    });
  });

  it('should delete a user', async () => {
    const id = '1';
    expect(await service.deleteUser(id)).toEqual(undefined);
  });

  it('should return a validated user', async () => {
    const dto = {
      email: 'example@mail.com',
      password: 'password',
    };
    expect(await service.validateUser(dto)).toEqual(userDefault);
  });

  it('should return a user', async () => {
    const id = '1';
    const refreshToken = '---valid_token---';

    expect(await service.validateToken(id, refreshToken)).toEqual(userDefault);
  });

  it('should return true', async () => {
    const id = '1';
    const refreshToken = '---new_token---';

    expect(await service.updateToken(id, refreshToken)).toEqual(true);
  });

  it('should return false', async () => {
    const id = '1';
    const refreshToken = null;

    expect(await service.updateToken(id, refreshToken)).toEqual(false);
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
      new NotFoundException('Email not found'),
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

  it('should throw an exception', (): void => {
    const dto = {
      email: 'example@mail.com',
      password: 'passwo',
    };
    expect(service.validateUser(dto)).rejects.toEqual(
      new ForbiddenException('Invalid password'),
    );
  });

  it('should throw an exception', (): void => {
    const id = '2';
    const token = '---valid_token---';
    expect(service.validateToken(id, token)).rejects.toEqual(
      new NotFoundException('User not found'),
    );
  });

  it('should throw an exception', (): void => {
    const id = '1';
    const token = '---invalid_token---';
    expect(service.validateToken(id, token)).rejects.toEqual(
      new ForbiddenException('Invalid refresh token'),
    );
  });

  it('should throw an exception', (): void => {
    const id = '3';
    const token = '---invalid_token---';
    expect(service.updateToken(id, token)).rejects.toEqual(
      new NotFoundException('User not found'),
    );
  });
});
