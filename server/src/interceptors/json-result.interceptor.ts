import { Interceptor, InterceptorInterface, Action } from "routing-controllers";

@Interceptor()
export class JsonResponseInterceptor implements InterceptorInterface {
  intercept({ response: { statusCode } }: Action, data: any) {
    return {
      ret: statusCode,
      msg: "successs",
      data: {
        ...data,
        date: new Date().toISOString(),
      },
    };
  }
}
