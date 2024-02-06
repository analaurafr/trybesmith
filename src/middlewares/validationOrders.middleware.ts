import { NextFunction, Request, Response } from 'express';

function validateUser(userId: number, res: Response) {
  if (!userId) {
    res.status(400).json({ message: '"userId" is required' });
    return false;
  }
  if (typeof userId !== 'number') {
    res.status(422).json({ message: '"userId" must be a number' });
    return false;
  }
  return true;
}

function validateProductIds(productIds: number[], res: Response) {
  if (!productIds) {
    res.status(400).json({ message: '"productIds" is required' });
    return false;
  }
  if (!Array.isArray(productIds)) {
    res.status(422).json({ message: '"productIds" must be an array' });
    return false;
  }
  if (productIds.length === 0 || !productIds.every((id) => typeof id === 'number')) {
    res.status(422).json({ message: '"productIds" must include only numbers' });
    return false;
  }
  return true;
}

function validateOrder(req: Request, res: Response, next: NextFunction): void {
  const { userId, productIds } = req.body;

  if (!validateUser(userId, res)) return;
  if (!validateProductIds(productIds, res)) return;

  next();
}

export default validateOrder;
