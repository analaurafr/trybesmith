export type Order = {
  id: number;
  userId: number;
  productIds?: Array<{ id: number }>;
};
