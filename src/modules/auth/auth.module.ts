import { Module } from '@nestjs/common';
import { UsersModule } from '../users/users.module';
import { UsersService } from '../users/utils/UsersService';
import { UsersServiceImpl } from '../users/services/users.service';

@Module({
  imports: [UsersModule],
  controllers: [],
  providers: [{ provide: UsersService, useClass: UsersServiceImpl }],
})
export class AuthModule {}
