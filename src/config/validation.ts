import Joi from 'joi';
import type { IAppConfig } from './interface';

export const validationSchema = Joi.object<{ values: IAppConfig }>({
  values: {
    port: Joi.number().exist().default(8080),
    postgres_port: Joi.number().exist().default(5432),
    postgres_db: Joi.string().required(),
    postgres_user: Joi.string().required(),
    postgres_password: Joi.string().required(),
    postgres_host: Joi.string().required(),
  },
});
