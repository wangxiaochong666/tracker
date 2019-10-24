/// <reference types="node" />

declare global {
  namespace Services {
    type NextFunction = (err?: any) => Promise<any>;
  }

  namespace Services {}
}
