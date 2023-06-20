import { Test } from '@nestjs/testing';
import { AuthServiceImpl } from './auth.service';
import { AuthService } from './auth.service.abstract';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule, JwtService } from '@nestjs/jwt';
import appConfig from '../../../config/app.config';
import { UsersService } from '../../users/services/users.service.abstract';
import { UsersServiceMock } from '../../users/services/users.service.mock';

import type { TestingModule } from '@nestjs/testing';
import { NotFoundException } from '@nestjs/common';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        ConfigModule.forRoot({
          load: [appConfig],
        }),
        JwtModule.register({}),
      ],
      providers: [
        JwtService,
        ConfigService,
        { provide: AuthService, useClass: AuthServiceImpl },
        { provide: UsersService, useClass: UsersServiceMock },
      ],
    }).compile();

    service = module.get<AuthService>(AuthService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return access and refresh tokens', async () => {
    const dto = {
      email: 'example@mail.com',
      password: 'password',
    };

    expect(await service.signin(dto)).toMatchObject({
      access_token: <string>expect.any(String),
      refresh_token: <string>expect.any(String),
    });
  });

  it('should return access and refresh tokens', async () => {
    const dto = {

      email: 'example@mail.com',
      password: 'password',
      first_name: 'John',
      last_name: 'Doe',
      image: Buffer.from(''),
    };

    expect(await service.signup(dto)).toMatchObject({
      access_token: <string>expect.any(String),
      refresh_token: <string>expect.any(String),
    });
  });

  it('should resolve logout', () => {
    const id = '1';

    expect(service.logout(id)).resolves.toEqual(undefined);
  });

  it('should return new access and refresh tokens', async () => {
    const id = '1';
    const rt = '---valid_token---';

    expect(await service.refresh(id, rt)).toMatchObject({
      access_token: <string>expect.any(String),
      refresh_token: <string>expect.any(String),
    });
  });

  it('should throw an error', () => {
    const dto = {
      email: 'incorrect email',
      password: 'incorrect password',
    };

    expect(service.signin(dto)).rejects.toEqual( new NotFoundException('Email not found'));
  });

  it('should throw an error', () => {
    const id = '2';

    expect(service.logout(id)).rejects.toEqual( new NotFoundException('User not found'));
  });

  it('should throw an error', () => {
    const id = '2';
    const rt = 'invalid token';

    expect(service.refresh(id, rt)).rejects.toEqual( new NotFoundException('User not found'));
  });

});
