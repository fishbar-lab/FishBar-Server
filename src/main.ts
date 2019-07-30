import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import { app as appConfig } from 'config'
import { HttpExceptionFilter } from './common/filters/http-exception.filter';
import { TransformInterceptor } from './common/Interceptors/transform.interceptor';
import { ValidationPipe } from '@nestjs/common/pipes';
import { RolesGuard } from './common/guards/role.guard';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalGuards(new RolesGuard(new Reflector()))
  app.useGlobalFilters(new HttpExceptionFilter());
  app.useGlobalInterceptors(new TransformInterceptor());
  
  await app.listen(appConfig.get('port'));
}
bootstrap();
