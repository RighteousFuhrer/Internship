import { ConfigModule } from '@nestjs/config';
import { DataSource } from 'typeorm';
import dbConfig from './src/config/database.config';

import type { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

ConfigModule.forRoot({
  isGlobal: true,
  load: [dbConfig],
});
const dataSource = new DataSource(dbConfig() as PostgresConnectionOptions);

export default dataSource;
