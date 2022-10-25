import express, { NextFunction } from 'express';
import { validationResult } from 'express-validator';

const checkValidator = (
  req: express.Request,
  res: express.Response,
  next: NextFunction
) => {
  const error = validationResult(req);
  try {
    if (!error.isEmpty()) {
      return res.status(420).json({ errors: error.array() });
    }
  } catch (err) {
    console.log(err);
  }
  next();
};

export default checkValidator;
