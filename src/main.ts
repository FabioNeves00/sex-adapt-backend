import { AccessTokenGuard } from './common/guards/access-token.guard';
import { ValidationPipe } from '@nestjs/common';
import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ConfigService } from '@nestjs/config';
import { createWriteStream } from 'fs';
import { get } from 'http';
import { ApiKeyGuard } from './common/guards/auth-key.guard';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get<ConfigService>(ConfigService);
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalGuards(
    new AccessTokenGuard(new Reflector()),
    new ApiKeyGuard('CLIENT')
  );
  const config = new DocumentBuilder()
    .setTitle('Sex-adapt')
    .setDescription('API Routes and data')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, document);
  if (process.env.NODE_ENV === 'development') {
    // write swagger ui files
    get(
      `http://localhost:${configService.get(
        'PORT'
      )}/swagger/swagger-ui-bundle.js`,
      function (response) {
        response.pipe(createWriteStream('swagger-static/swagger-ui-bundle.js'));
        console.log(
          `Swagger UI bundle file written to: '/swagger-static/swagger-ui-bundle.js'`
        );
      }
    );

    get(
      `http://localhost:${configService.get(
        'PORT'
      )}/swagger/swagger-ui-init.js`,
      function (response) {
        response.pipe(createWriteStream('swagger-static/swagger-ui-init.js'));
        console.log(
          `Swagger UI init file written to: '/swagger-static/swagger-ui-init.js'`
        );
      }
    );

    get(
      `http://localhost:${configService.get(
        'PORT'
      )}/swagger/swagger-ui-standalone-preset.js`,
      function (response) {
        response.pipe(
          createWriteStream('swagger-static/swagger-ui-standalone-preset.js')
        );
        console.log(
          `Swagger UI standalone preset file written to: '/swagger-static/swagger-ui-standalone-preset.js'`
        );
      }
    );

    get(
      `http://localhost:${configService.get('PORT')}/swagger/swagger-ui.css`,
      function (response) {
        response.pipe(createWriteStream('swagger-static/swagger-ui.css'));
        console.log(
          `Swagger UI css file written to: '/swagger-static/swagger-ui.css'`
        );
      }
    );
  }
  await app.listen(configService.get('PORT'), () => {
    console.log(`Listening on localhost:${configService.get('PORT')}`);
  });
  return app;
}

export const app = bootstrap();
