/**
 * Module dependencies.
 */
import "reflect-metadata";
import "./lib/dotenv/register";

import http from "http";
import createDebug from "debug";

import { findAPortNotInUse } from "portscanner";

import { Container } from "typedi";
import { useContainer as useRouteContainer } from "routing-controllers";
import { ConnectionOptions, useContainer as useOrmContainer, Connection } from "typeorm";

import { name } from "../package.json";

import app from "./app";

import { createConnection, connection } from "./lib/database/connection";
import { normalizePort } from "./utilities/normalize-port.utilitie";

// 应用容器
useOrmContainer(Container);
useRouteContainer(Container);

app.set("name", name);

async function bootstrap() {
  /**
   * Connection Database
   */
  const connectionOptions: ConnectionOptions = {
    type: "mysql",
    name: "default",

    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entityPrefix: process.env.DB_PREFIX,
    entities: ["./models/*.model.{ts,js}"],
    synchronize: true,
  };

  try {
    const connection: Connection = await createConnection(connectionOptions);
    console.log("TyptORM.Connection", connection.isConnected);
  } catch (error) {
    console.log("TyptORM.Connection Error", error);
  }

  /**
   * Create DEBUG server.
   */
  const debug = createDebug(`${name}:server`);

  /**
   * Get port from environment and store in Express.
   */
  const port = await findAPortNotInUse(normalizePort(process.env.PORT || "8080") as number);
  app.set("port", port);

  /**
   * Get hostname from environment and store.
   */
  const hostname = process.env.HOST || "0.0.0.0";

  /**
   * Create HTTP server.
   */
  const server = http.createServer(app);

  /**
   * Listen on provided port, on all network interfaces.
   */
  server.listen(port, hostname);
  server.on("error", onError);
  server.on("listening", onListening);

  /**
   * Event listener for HTTP server "error" event.
   */
  function onError(error) {
    if (error.syscall !== "listen") {
      throw error;
    }

    const bind = typeof port === "string" ? "Pipe " + port : "Port " + port;

    // handle specific listen errors with friendly messages
    switch (error.code) {
      case "EACCES":
        console.error(bind + " requires elevated privileges");
        process.exit(1);
        break;
      case "EADDRINUSE":
        console.error(bind + " is already in use");
        process.exit(1);
        break;
      default:
        throw error;
    }
  }

  /**
   * Event listener for HTTP server "listening" event.
   */
  function onListening() {
    const addr = server.address();
    const bind = typeof addr === "string" ? "pipe " + addr : "port " + addr.port;
    debug("Listening on " + bind);
  }
}

bootstrap();

// Catch CTRL/CMD+C interrupts cleanly
["SIGHUP", "SIGINT", "SIGQUIT", "SIGABRT", "SIGTERM"].forEach((s: NodeJS.Signals) =>
  process.on(s, async () => {
    if (connection) await connection.close();
    process.exit(0);
  })
);
