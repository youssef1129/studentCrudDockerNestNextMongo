import { ValidationPipe } from '@nestjs/common/';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());
  app.enableCors({
    origin: [
      'http://localhost:3000',
      'http://localhost:6002',
      'http://client:6002',
    ],
    methods: ['POST', 'DELETE', 'PUT', 'GET'],
  });
  await app.listen(process.env.APP_PORT || 6001);
}
bootstrap();
