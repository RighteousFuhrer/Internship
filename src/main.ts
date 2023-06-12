import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { version, name, description } from 'package.json';
import { AppModule } from './modules/app/app.module';
import { Logger } from '@nestjs/common';

import type { IAppConfig } from './config/interfaces';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);
  const configService = app.get<ConfigService<IAppConfig, true>>(ConfigService);

  const swaggerConfig = new DocumentBuilder()
    .setTitle(name)
    .setDescription(description)
    .setVersion(version)
    .build();
  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('api', app, document);

  app.enableCors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT'],
    credentials: true,
  });

  const port = configService.get('port', { infer: true });

  await app.listen(port, () => {
    Logger.log('listening on port ' + port);
  });
}
bootstrap();
