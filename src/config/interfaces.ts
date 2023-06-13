export interface IAppConfig extends IServerConfig {
  database: IDbConfig;
}

export interface IServerConfig {
  port: number;
  jwt_rt_secret: string;
  jwt_at_secret: string;
}

export interface IDbConfig {
  type: string;
  host: string;
  port: number;
  username: string;
  password: string;
  database: string;
  name: string;
  entities: string[];
  migrations: string[];
}
