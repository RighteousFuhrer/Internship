import { categoryDefault } from './category.default';

import type { Product } from '../entities/product.entity';

export const productDefault: Product = {
  id: '1',
  name: 'Default',
  price: 100,
  total_sold: 10,
  category: categoryDefault,
  image: Buffer.from(''),
  product_lists: Promise.resolve([]),
};
