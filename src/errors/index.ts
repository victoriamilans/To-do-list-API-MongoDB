import { Request, Response, NextFunction } from "express";

export class appError extends Error {
  statusCode: number;
  constructor(message: string, statusCode: number = 400) {
    super();
    this.statusCode = statusCode;
    this.message = message;
  }
}

export const handleError = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof appError) {
    console.log(err.message);
    return res.status(err.statusCode).send({ message: err.message });
  }
  console.error(err.message);
  return res.status(500).send({ message: err.message });
};
