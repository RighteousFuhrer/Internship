import { Module } from '@nestjs/common';
import { UsersController } from './controllers/users.controller';
import { UsersServiceImpl } from './services/users.service';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { UserRepository } from './repositories/user.repository';
import { UsersService } from './services/users.service.abstract';

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
