import type { IAppConfig } from './interface';

export const configuration = (): IAppConfig => {
  return {
    port: Number(process.env.PORT),
    postgres_port: Number(process.env.POSTGRESS_PORT),
    postgres_db: process.env.POSTGRESS_DATABASE as string,
    postgres_user: process.env.POSTGRESS_USER as string,
    postgres_password: process.env.POSTGRESS_PASSWORD as string,
    postgres_host: process.env.POSTGRESS_PASSWORD as string,
  };
};
