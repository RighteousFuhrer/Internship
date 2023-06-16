import { Injectable } from '@nestjs/common';

import type { CreateUserDto } from 'src/modules/users/dtos/createUser.dto';
import type { AuthDto } from '../dtos/auth.dto';
import type { Tokens } from '../types/tokens.type';

@Injectable()
export abstract class AuthService {

  public abstract signin(dto: AuthDto): Promise<Tokens>;

  public abstract signup(dto: CreateUserDto): Promise<Tokens>;

  public abstract logout(id: number): Promise<void>;

  public abstract refresh(id: number, rt: string): Promise<Tokens>

  public abstract updateToken(id: number, rt: string): Promise<void>

  public abstract getTokens(id: number, email: string): Promise<Tokens>

}
