import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  // instanciate the app
  const app = await NestFactory.create(AppModule);

  // launch the server on port 3000
  await app.listen(3000);
}
bootstrap();
