import { registerAs } from '@nestjs/config';
import Joi from 'joi';

import type { IServerConfig } from './interfaces';

export default registerAs('app', (): IServerConfig => {
  const values = {
    port: Number(process.env.PORT),
    jwt_rt_secret: process.env.JWT_RT_SECRET as string,
    jwt_at_secret: process.env.JWT_AT_SECRET as string,
  };

  const schema = Joi.object<IServerConfig>({
    port: Joi.number().integer().default(5555),
    jwt_rt_secret: Joi.string().required().default('rt-secret'),
    jwt_at_secret: Joi.string().required().default('at-secret'),
  });

  const { error } = schema.validate(values, { abortEarly: false });

  if (error) {
    throw new Error(`Validation failed - ${error.message}`);
  }

  return values;
});
