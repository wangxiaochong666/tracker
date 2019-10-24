import { NestFactory } from "@nestjs/core";
import { AppModule } from "./modules/app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const port = process.env.PORT || 8080;
  const host = process.env.HOST || "0.0.0.0";
  
  await app.listen(port, host);
}
bootstrap();
