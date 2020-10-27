import { Product } from './product.entity';

export const productProviders = [
  {
    provide: 'PRODUCT_REPOSITORY',
    useValue: Product,
  },
];