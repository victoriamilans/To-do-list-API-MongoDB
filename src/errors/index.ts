import { Request, Response, NextFunction, ErrorRequestHandler } from "express";

export class AppError extends Error {
  statusCode: number;
  constructor(message: string, statusCode: number = 400) {
    super();
    this.statusCode = statusCode;
    this.message = message;
  }
}

class ErrorHandler {
  handleError(): ErrorRequestHandler {
    return (err: Error, req: Request, res: Response, next: NextFunction) => {
      if (err instanceof AppError) {
        console.log(err.message);
        return res.status(err.statusCode).send({ message: err.message });
      }
      console.error(err.message);
      return next(err);
    };
  }
}
export const errorHandler = new ErrorHandler();
