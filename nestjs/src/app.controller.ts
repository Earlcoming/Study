import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Res,
  Patch,
  Put,
  Query,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { ConnectableObservable } from 'rxjs';
import { AppService } from './app.service';
import { CoreService } from './Core/service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly coreService: CoreService,
  ) {}

  @Get()
  @ApiTags('get 请求')
  @ApiOperation({
    summary: '测试接口',
  })
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('list/:id')
  @ApiTags('post 请求getHello的数据')
  @ApiOperation({
    summary: 'post 请求数据',
  })
  postHello(@Param('id') id: number): string {
    return `id is ${id}`;
  }

  // @Post()
  // create(@Res() res) {
  //   return res.status(201).send('测试post  create');
  // }

  @Patch(':id')
  update(@Param('id') id: string): string {
    return `id is ${id}`;
  }

  @Put()
  delete(@Query() params) {
    console.log('params', params, '=====');
    return `params is ${params}`;
  }
}
