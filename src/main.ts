import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session'
import * as cookieParser from 'cookie-parser';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(
    session(
      {
        secret: 'clave1234',
        resave: false,
        saveUninitialized: false,
      }
    ),
    cookieParser('clave1234')
    
  );
  await app.listen(3000);
}
bootstrap();

