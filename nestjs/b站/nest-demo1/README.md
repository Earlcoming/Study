## nest 自学做的 demo

### express 修改为 Fastify

`npm i --save @nestjs/platform-fastify`

`main.ts` 文件修改

```ts
import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { ApplicationModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    ApplicationModule,
    new FastifyAdapter(),
  );
  await app.listen(3000);
}
bootstrap();
```

### swagger

`npm install --save @nestjs/swagger swagger-ui-express`

如果你正在使用 fastify ，你必须安装 fastify-swagger 而不是 swagger-ui-express ：

`npm install --save @nestjs/swagger fastify-swagger`

安装完成后，打开`main.ts`并使用`SwaggerModule` 类初始化 Swagger:

```ts
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ApplicationModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(ApplicationModule);

  const options = new DocumentBuilder()
    .setTitle('Cats example')
    .setDescription('The cats API description')
    .setVersion('1.0')
    .addTag('cats')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
```

### cors 跨域 logger 日志

`main.ts`文件中代码加上`{cors: true}`

```ts
const app = await NestFactory.create(AppModule, { cors: true ，logger: ['error', 'warn'] });
```

### JTW 认证

`npm install --save @nestjs/passport passport passport-local`
`npm install --save-dev @types/passport-local`