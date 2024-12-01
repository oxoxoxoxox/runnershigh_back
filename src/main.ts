import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as path from 'node:path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useStaticAssets(path.join(__dirname, './uploads'));
  app.enableCors({
    origin: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
  });

  const config = new DocumentBuilder()
    .addSecurity('access_token', {
      type: 'http',
      scheme: 'bearer',
      name: 'JWT',
      in: 'Header',
    })
    .addSecurity('refresh_token', {
      type: 'http',
      scheme: 'bearer',
      name: 'JWT',
      in: 'Body',
    })
    .setTitle('runners high')
    .setDescription('캡스톤디자인 2024-2')
    .setVersion('1.0')
    .addTag('run')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('run', app, documentFactory);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
