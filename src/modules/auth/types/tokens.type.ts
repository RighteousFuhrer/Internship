export type Tokens = {
  access_token: string;
  refresh_token: string;
}

export type JwtPayload = {
  sub: string;
  email: string;
};

export type JwtRefreshPayload = {
  sub: string;
  email: string;
  refreshToken: string ;
};

// Type of request with access token
export type RequestWithToken = {
  user: JwtPayload;
  [key: string]: string | object;
};

// Type of request with refresh token
export type RequestWithRefreshToken = {
  user: JwtRefreshPayload;
  [key: string]: string | object;
};
