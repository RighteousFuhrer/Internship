import type { IAppConfig } from './interface';

export const configuration = (): IAppConfig => {
  return {
    port: parseInt(process.env.PORT || '5555'),
  };
};
