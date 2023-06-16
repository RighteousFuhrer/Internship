import { Module } from '@nestjs/common';
import { UsersModule } from '../users/users.module';
import { UsersService } from '../users/services/users.service.abstract';
import { UsersServiceImpl } from '../users/services/users.service';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../users/entities/user.entity';
import { AuthController } from './controllers/auth.controller';
import { UsersController } from '../users/controllers/users.controller';
import { ConfigService } from '@nestjs/config';
import { JwtRtGuard } from '../../framework/guards/jwt-rt.guard';
import { JwtRefreshStrategy } from './strategies/jwt-refresh.strategy';
import { JwtAccessStrategy } from './strategies/jwt-access.strategy';
import { AuthService } from './services/auth.service.abstract';
import { AuthServiceImpl } from './services/auth.service';

const authService = { provide: AuthService, useClass: AuthServiceImpl };
const userService = { provide: UsersService, useClass: UsersServiceImpl };

@Module({
  imports: [
    UsersModule,
    PassportModule,
    JwtModule.register({}),
    TypeOrmModule.forFeature([User]),
  ],
  controllers: [AuthController, UsersController],
  providers: [
    authService,
    userService,
    ConfigService,
    JwtRtGuard,
    JwtRefreshStrategy,
    JwtAccessStrategy,
  ],
})
export class AuthModule {}
