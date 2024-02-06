import { NextFunction, Request, Response } from 'express';

const validateUser = (req: Request, res: Response, next: NextFunction) => {
  const { userId } = req.body;

  if (!userId) {
    return res.status(400).json({ message: '"userId" is required' });
  }

  if (typeof userId !== 'number') {
    return res.status(422).json({ message: '"userId" must be a number' });
  }

  next();
};

const validateOrder = (req: Request, res: Response, next: NextFunction) => {
  const { productIds } = req.body;

  if (!productIds) {
    return res.status(400).json({ message: '"productIds" is required' });
  }

  if (!Array.isArray(productIds)) {
    return res.status(422).json({ message: '"productIds" must be an array' });
  }

  if (productIds.length === 0) {
    return res.status(422).json({ message: '"productIds" must include only numbers' });
  }

  next();
};

export default {
  validateUser,
  validateOrder,
};