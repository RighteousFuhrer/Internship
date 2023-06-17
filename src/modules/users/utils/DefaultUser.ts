import * as bcrypt from 'bcrypt';

import type { User } from '../entities/user.entity';

export const defaultUser: User = {
  id: '1',
  email: 'example@mail.com',
  first_name: 'John',
  last_name: 'Doe',
  password: bcrypt.hashSync('password', 10),
  image: Buffer.from('', 'base64'),
  hashedRt: bcrypt.hashSync('---valid_token---', 10),
  hashPassword: (): Promise<void> => Promise.resolve(),
};
