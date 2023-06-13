import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { AuthController } from './controllers/auth.controller';
import { AuthService } from './services/auth.service';
import { UsersService } from './services/users.service';
import { LocalStrategy } from './strategies/local.strategy';
import { UsersController } from './controllers/users.controller';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './strategies/jwt-access.strategy';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';

@Module({
  imports: [PassportModule, JwtModule.register({}),TypeOrmModule.forFeature([User])],
  controllers: [AuthController, UsersController],
  providers: [UsersService, AuthService, LocalStrategy, JwtStrategy, JwtAuthGuard],
})
export class AuthModule {}
