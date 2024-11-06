import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: ['http://192.168.88.200:8080', 'http://juniorbooks.fr:8080'],
  });
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
