import * as bcrypt from 'bcrypt';

import type { User } from '../entities/user.entity';

export const userFirst: User = {
  id: '1',
  email: 'example@mail.com',
  first_name: 'John',
  last_name: 'Doe',
  password: bcrypt.hashSync('password', 10),
  image: Buffer.from('', 'base64'),
  hashedRt: bcrypt.hashSync('---valid_token---', 10),
  hashPassword: (): Promise<void> => Promise.resolve(),
};

export const userSecond: User = {
  id: '121',
  email: 'afasfas',
  first_name: 'bxcx',
  last_name: 'mvbmv',
  password: bcrypt.hashSync('', 10),
  image: Buffer.from('', 'base64'),
  hashedRt: null,
  hashPassword: (): Promise<void> => Promise.resolve(),
};
