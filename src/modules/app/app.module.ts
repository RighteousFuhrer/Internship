import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import appConfig from '../../config/app.config';
import dbConfig from '../../config/database.config';
import { AuthModule } from '../auth/auth.module';
import { SalesModule } from '../sales/sales.module';
import { AppController } from './app.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [appConfig, dbConfig],
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        ...(await configService.get('database')),
      }),
      inject: [ConfigService],
    }),
    AuthModule,
    SalesModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
