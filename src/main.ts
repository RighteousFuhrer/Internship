import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { version, name, description } from 'package.json';
import { AppModule } from './modules/app/app.module';
import { Logger } from '@nestjs/common';

import type { IServerConfig } from './config/interfaces';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);
  const configService = app.get<ConfigService<IServerConfig, true>>(ConfigService);

  const swaggerConfig = new DocumentBuilder()
    .setTitle(name)
    .setDescription(description)
    .setVersion(version)
    .build();
  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('api', app, document);

  // * for postman debuging
  // should be replaced with localhost:3000 in final version
  app.enableCors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT'],
    credentials: true,
  });

  const port = configService.get('port', { infer: true });

  await app.listen(port, () => {
    Logger.log('Listening on port ' + port);
  });
}
bootstrap();
