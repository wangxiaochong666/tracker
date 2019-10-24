import express from "express";
import { useExpressServer } from "routing-controllers";

// 创建实例
const app = express();

// 应用控制器
useExpressServer(app, {
  // routePrefix: "/api",
  development: true,
  cors: true,
  defaultErrorHandler: false,
  controllers: [__dirname + "/controllers/*.controller.{ts,js}"],
  middlewares: [__dirname + "/middlewares/*.middleware.{ts,js}"],
  interceptors: [__dirname + "/interceptors/*.interceptor.{ts,js}"],
});

export default app;
