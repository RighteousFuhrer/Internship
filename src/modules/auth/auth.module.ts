import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtRtGuard } from '../../common/guards/jwt-rt.guard';
import { UsersController } from '../users/controllers/users.controller';
import { User } from '../users/entities/user.entity';
import { UsersService } from '../users/interfaces/UsersService';
import { UsersServiceImpl } from '../users/services/users.service';
import { UsersModule } from '../users/users.module';
import { AuthController } from './controllers/auth.controller';
import { AuthServiceImpl } from './services/auth.service';
import { JwtAccessStrategy } from './strategies/jwt-access.strategy';
import { JwtRefreshStrategy } from './strategies/jwt-refresh.strategy';
import { AuthService } from './interfaces/AuthService';

@Module({
  imports: [
    UsersModule,
    PassportModule,
    JwtModule.register({}),
    TypeOrmModule.forFeature([User]),
  ],
  controllers: [AuthController, UsersController],
  providers: [
    ConfigService,
    JwtRtGuard,
    JwtRefreshStrategy,
    JwtAccessStrategy,
    { provide: AuthService, useClass: AuthServiceImpl },
    { provide: UsersService, useClass: UsersServiceImpl },
  ],
})
export class AuthModule {}
