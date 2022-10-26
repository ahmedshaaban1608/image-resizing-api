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
      let errors = '';
      error.array().forEach((e) => {
        errors += e.msg + ' - ';
      });
      res.status(420).send(errors);
      return;
    }
  } catch (err) {
    console.log(err);
  }
  next();
};

export default checkValidator;
