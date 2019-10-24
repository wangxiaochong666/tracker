import { Middleware, ExpressErrorMiddlewareInterface } from "routing-controllers";
import { Request, Response, NextFunction } from "express";

@Middleware({ type: "after" })
export class AllErrorsHandler implements ExpressErrorMiddlewareInterface {
  error(error: any, req: Request, res: Response, next: NextFunction): void {
    res.send({
      ret: error.httpCode,
      msg: error.message,
      data: {},
    });
  }
}
