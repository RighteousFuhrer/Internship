import { Module } from '@nestjs/common';
import { UsersService } from '../users/utils/UsersService';
import { UsersModule } from '../users/users.module';
import { UsersServiceImpl } from '../users/services/users.service';
import { UsersController } from '../users/controllers/users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../users/entities/user.entity';
import { ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { JwtAccessStrategy } from './strategies/jwt-access.strategy';
import { JwtRefreshStrategy } from './strategies/jwt-refresh.strategy';
import { PassportModule } from '@nestjs/passport';
import { AuthController } from './controllers/auth.controller';
import { AuthService } from './services/auth.service';
import { JwtRtGuard } from '../../common/guards/jwt-rt.guard';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({}),
    UsersModule,
    TypeOrmModule.forFeature([User]),
  ],
  controllers: [AuthController, UsersController],
  providers: [
    ConfigService,
    AuthService,
    JwtRefreshStrategy,
    JwtAccessStrategy,
    JwtRtGuard,
    { provide: UsersService, useClass: UsersServiceImpl },
  ],
})
export class AuthModule {}
