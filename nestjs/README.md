## 创建nest

`npm i -g @nestjs/cli` 创建cli
`nest new project-name` cli创建项目

## nest/cli 常用命令

`nest g co user` 生成controller.ts
`nest g mo user` 生成module.ts
`nest g s user` 生成service.ts
`nest g resource user` 生成user文件夹

## RESTful 风格设计

### 1.接口url



传统接口

```html
http://localhost:8080/api/get_list?id=1

http://localhost:8080/api/delete_list?id=1

http://localhost:8080/api/update_list?id=1

```

RESTful接口

http://localhost:8080/api/get_list/1 查询 删除 更新

RESTful 风格一个接口就会完成 增删改差 他是通过不同的请求方式来区分的

查询GET

提交POST

更新 PUT PATCH

删除 DELETE



### 2,版本控制

main.ts

```ts

import { NestFactory } from '@nestjs/core';
import { VersioningType } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableVersioning({
    type: VersioningType.URI,
  })
  await app.listen(3000);
}
bootstrap();

```


然后在user.controller 配置版本

```ts
import { Controller, Get, Post, Body, Patch, Param, Delete, Version } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller({
  path:"user",
  version:'1'
})
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get()
  // @Version('1')
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }
```

