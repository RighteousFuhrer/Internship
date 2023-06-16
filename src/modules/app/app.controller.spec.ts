import { Test } from '@nestjs/testing';
import { AppController } from './app.controller';

import type { TestingModule } from '@nestjs/testing';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should be defined"', () => {
      expect(appController.health()).toEqual('OK, server is running');
    });
  });
});
