import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.setGlobalPrefix('devapi');  //http://localhost:3000/devapi/girl
  await app.listen(3000);
}
bootstrap();
