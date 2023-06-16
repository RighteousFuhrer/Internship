import { Injectable } from '@nestjs/common';

import type { CreateUserDto } from '../../../modules/users/dtos/createUser.dto';
import type { AuthDto } from '../dtos/auth.dto';
import type { Tokens } from '../types/tokens.type';

@Injectable()
export abstract class AuthService {

  public abstract signin(dto: AuthDto): Promise<Tokens>;

  public abstract signup(dto: CreateUserDto): Promise<Tokens>;

  public abstract logout(id: string): Promise<void>;

  public abstract refresh(id: string, rt: string): Promise<Tokens>

}
