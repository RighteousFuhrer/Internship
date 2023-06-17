import { createParamDecorator } from '@nestjs/common';

import type { ExecutionContext } from '@nestjs/common';
import type { RequestWithToken } from '../../modules/auth/types/tokens.type';

export const User = createParamDecorator(
  (data: 'sub' | 'email' | 'refreshToken', ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest() as RequestWithToken;
    const user = request.user;

    return data ? user?.[data] : user;
  },
);
