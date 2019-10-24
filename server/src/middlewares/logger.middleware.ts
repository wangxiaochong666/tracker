import { Middleware, ExpressMiddlewareInterface } from "routing-controllers";
import morgan from "morgan";

@Middleware({ type: "before" })
export class LoggerMiddleware implements ExpressMiddlewareInterface {
  use = morgan("dev");
}
