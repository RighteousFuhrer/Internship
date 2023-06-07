import { registerAs } from '@nestjs/config';
import * as Joi from 'joi';
import type { IAppConfig } from './interface';

export default registerAs('my-app-config-namespace', (): IAppConfig => {
  const values: IAppConfig = {
    port: parseInt(process.env.PORT || '3000'),
  };

  const schema = Joi.object<IAppConfig, true>({
    port: Joi.number().required(),
  });

  const { error } = schema.validate(values, { abortEarly: false });
  if (error) {
    throw new Error(`Validation failed - ${error.message}`);
  }

  return values;
});
