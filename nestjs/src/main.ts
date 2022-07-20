import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

const listenPort = 3000;
async function bootstrap() {
  const app = await NestFactory.create(AppModule, { abortOnError: false });
  console.log(`server start in http://localhost:${listenPort}`);

  // swagger start
  const config = new DocumentBuilder()
    .setTitle('Cats example')
    .setDescription('The cats API description')
    .setVersion('1.0')
    .addTag('cats')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  // swagger end

  await app.listen(listenPort);
}
bootstrap();
