import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { AuthController } from './controllers/auth.controller';
import { AuthService } from './services/auth.service';
import { UsersService } from './services/users.service';
import { UsersController } from './controllers/users.controller';
import { JwtModule } from '@nestjs/jwt';
import { JwtAccessStrategy } from './strategies/jwt-access.strategy';
import { JwtRefreshStrategy } from './strategies/jwt-refresh.strategy';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { ConfigService } from '@nestjs/config';
import { JwtRtGuard } from '../../common/guards/jwt-rt.guard';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({}),
    TypeOrmModule.forFeature([User]),
  ],
  controllers: [AuthController, UsersController],
  providers: [
    UsersService,
    AuthService,
    JwtRefreshStrategy,
    JwtAccessStrategy,
    ConfigService,
    JwtRtGuard,
  ],
})
export class AuthModule {}
