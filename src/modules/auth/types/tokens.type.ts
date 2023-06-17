export type Tokens = {
  access_token: string;
  refresh_token: string;
}

export type JwtPayload = {
  sub: string;
  email: string;
  refreshToken?: string ;
};

export type RequestWithToken = {
  user: JwtPayload;
  [key: string]: string | object;
};

