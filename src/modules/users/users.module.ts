import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from './controllers/users.controller';
import { User } from './entities/user.entity';
import { UsersService } from './interfaces/UsersService';
import { UserRepository } from './repositories/user.repository';
import { UsersServiceImpl } from './services/users.service';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UsersController],
  providers: [
    ConfigService,
    UserRepository,
    { provide: UsersService, useClass: UsersServiceImpl },
  ],
  exports: [
    UserRepository,
    { provide: UsersService, useClass: UsersServiceImpl },
  ],
})
export class UsersModule {}
