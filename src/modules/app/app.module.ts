import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { configuration } from '../../config/configuration';
import { get_db_config } from '../../config/database.config';
import { validationSchema } from '../../config/validation';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
      validationSchema,
    }),
    TypeOrmModule.forRootAsync(get_db_config()),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
