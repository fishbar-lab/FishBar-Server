import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import { app as appConfig } from 'config';
import { HttpExceptionFilter } from './common/filters/http-exception.filter';
import { TransformInterceptor } from './common/Interceptors/transform.interceptor';
import { ValidationPipe } from '@nestjs/common/pipes';
import { RolesGuard } from './common/guards/role.guard';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalGuards(new RolesGuard(new Reflector()));
  app.useGlobalFilters(new HttpExceptionFilter());
  app.useGlobalInterceptors(new TransformInterceptor());

  const options = new DocumentBuilder()
    .setTitle('Cats example')
    .setDescription('The cats API description')
    .setVersion('1.0')
    .addTag('cats')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('swagger', app, document);

  await app.listen(appConfig.get('port'));
  // tslint:disable-next-line:no-console
  console.log(`服务开启,端口:${appConfig.get('port')}`);
}
bootstrap();
