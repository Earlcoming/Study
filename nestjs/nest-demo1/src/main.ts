import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';


async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    // 开启Fastify
    new FastifyAdapter(),
    // 开启跨域, 开启日志(错误和警告)
    { cors: true, logger: ['error', 'warn'] }
  );

  // 使用swagger
  const options = new DocumentBuilder()
    .setTitle('我的测试项目')
    .setDescription('测试项目描述')
    .setVersion('1.0')
    .addTag('Earl')
    .build()
  const document = SwaggerModule.createDocument(app, options)
  SwaggerModule.setup('api', app, document)

  await app.listen(3000);
}
bootstrap();


