import {
  Controller,
  Get,
  Req,
  Param,
  Query,
  HttpCode,
  Res,
  Session,
  Post,
  Body
} from '@nestjs/common';
import { UserService } from './user.service';
import * as svgCaptcha from 'svg-captcha';
import { ApiTags, ApiOperation, ApiParam, ApiBearerAuth } from '@nestjs/swagger';
import { ApiQuery, ApiResponse } from '@nestjs/swagger/dist';
import { CreateUserDto } from './dto/create-user.dto';

// @Controller('user')
@Controller({
  path: 'user',
  // version: '1'
})
@ApiBearerAuth()
@ApiTags('user用户接口')


//  localhost:3000/v1/user/123
export class UserController {
  constructor(private readonly userService: UserService) { }
  @Get('code')
  @ApiOperation({ summary: 'get code 接口 获取验证码', description: '获取验证码的描述' })
  createCode(@Req() req, @Res() res, @Session() session) {
    const captcha = svgCaptcha.create({
      size: 4,//生成几个验证码
      fontSize: 50, //文字大小
      width: 100,  //宽度
      height: 34,  //高度
      background: '#cc9966',  //背景颜色
    })

    session.code = captcha.text
    res.type('image/svg+xml')
    res.send(captcha.data)
  }

  @Post('create')
  createUser(@Body() createUserDto: CreateUserDto, @Session() session) {
    return this.userService.create(createUserDto)
    // console.log(Body, session.code)
    // return {
    //   code: 200
    // }
  }

  @Get()
  @ApiOperation({ summary: '获取信息' })
  @ApiQuery({ name: 'page', description: '分页信息', required: true })
  @ApiResponse({ status: 403, description: '403 信息错误' })
  findAll(@Query() req): Object {
    console.log(req)
    return {
      code: 200,
      msg: '信息',
      data: req
    }
  }

  @Get(":id")
  @ApiOperation({ summary: '根据id获取内容接口' })
  @ApiParam({ name: 'id', description: 'id必须是数字', required: true, type: 'number' })
  @HttpCode(500)
  findId(@Param() params) {
    console.log(params)
    return {
      data: params
    }
  }




  // @Get()
  // // 单个版本控制
  // @Version('1')
  // findAll() {
  //   return this.userService.findAll();
  // }

}
