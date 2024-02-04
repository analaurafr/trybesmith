import { Product } from './Product';

export type Order = {
  id: number;
  userId: number;
  productId?: Product[];
};
