import { registerAs } from '@nestjs/config';
import Joi from 'joi';

import type { IDbConfig } from './interfaces';

export default registerAs('database', (): IDbConfig => {
  const values = {
    type: 'postgres',
    host: process.env.POSTGRES_HOST as string,
    port: Number(process.env.POSTGRES_PORT),
    username: process.env.POSTGRES_USER as string,
    password: process.env.POSTGRES_PASSWORD as string,
    database: process.env.POSTGRES_DB as string,
    name: 'db-connection',
    entities: ['dist/**/**.entity.{ts,js}'],
    migrations: ['dist/**/migrations/*.{ts,js}'],
  };

  const schema = Joi.object<IDbConfig>({
    type: Joi.string().valid('postgres').default('postgres'),
    host: Joi.string().default('localhost'),
    port: Joi.number().integer().default(5432),
    database: Joi.string().required(),
    username: Joi.string().required(),
    password: Joi.string().required(),
    name: Joi.string(),
    entities: Joi.array(),
    migrations: Joi.array(),
  });

  const { error } = schema.validate(values, { abortEarly: false });

  if (error) {
    throw new Error(`Validation failed - ${error.message}`);
  }

  return values;
});
