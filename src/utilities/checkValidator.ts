import express, { NextFunction } from 'express';
import { validationResult } from 'express-validator';

const checkValidator = (
  req: express.Request,
  res: express.Response,
  next: NextFunction
): void => {
  const error = validationResult(req);
  try {
    if (!error.isEmpty()) {
      res.status(420).json({ errors: error.array() });
      return;
    }
  } catch (err) {
    console.log(err);
  }
  next();
};

export default checkValidator;
