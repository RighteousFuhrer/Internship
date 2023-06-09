import { ConfigModule, ConfigService } from '@nestjs/config';

import type { TypeOrmModuleAsyncOptions } from '@nestjs/typeorm';

export function get_db_config(): TypeOrmModuleAsyncOptions {
  return {
    imports: [ConfigModule],
    inject: [ConfigService],

    useFactory: (configService: ConfigService) => ({
      type: 'postgres',
      host: configService.get('postgres_host'),
      port: configService.get('postgres_port'),
      username: configService.get('postgres_user'),
      password: configService.get('postgres_password'),
      database: configService.get('postgres_db'),
      entities: [__dirname + '/../**/*.entity{.ts,.js}'],
    }),
  };
}
