import { NestFactory } from '@nestjs/core';
import { VersioningType } from '@nestjs/common';
import { AppModule } from './app.module';
import * as session from 'express-session'
// import { SwaggerModule } from '@nestjs/swagger'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger/dist';

async function bootstrap() {
  // 添加跨域
  const app = await NestFactory.create(AppModule, { cors: true });
  //版本控制
  app.enableVersioning({
    type: VersioningType.URI,
  });
  // 添加session
  // ecret      生成服务端session 签名 可以理解为加盐
  // name     	生成客户端cookie 的名字 默认 connect.sid
  // cookie     设置返回到前端 key 的属性，默认值为{ path: ‘/’, httpOnly: true, secure: false, maxAge: null }。
  // rolling	  在每次请求时强行设置 cookie，这将重置 cookie 过期时间(默认:false)
  // app.use(session({ secret: "earl", name: 'earl.session', rolling: true, cookie: { maxAge: 600000 } }))

  const config = new DocumentBuilder()
    .setTitle('我的接口文档')
    .setDescription('我是描述')
    .setVersion('1.0')
    .addTag('cat')
    .addTag('小狗')
    .addBearerAuth()
    .build()
  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('/api', app, document)

  await app.listen(3000);

}
bootstrap();
