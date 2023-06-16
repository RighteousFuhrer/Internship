import { Test } from '@nestjs/testing';
import { AuthServiceImpl } from './auth.service';
import { AuthService } from './auth.service.abstract';

import type { TestingModule } from '@nestjs/testing';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [{ provide: AuthService, useClass: AuthServiceImpl }],
    }).compile();

    service = module.get<AuthService>(AuthService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
