import { productDefault } from './product.default';

import type { Category } from '../entities/category.entity';

export const categoryDefault:Category = {
  id: '1',
  name: 'Default',
  image: Buffer.from(''),
  products: Promise.resolve([productDefault]),
};
