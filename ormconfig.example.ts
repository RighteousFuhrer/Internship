import { DataSource } from 'typeorm';

const dataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'root',
  password: 'root',
  database: 'example_db',
  name: 'db-connection',
  entities: ['dist/src/**/**.entity{.ts,.js}'],
  migrations: ['dist/src/migrations/**/*{.ts,.js}'],
});

export default dataSource;
