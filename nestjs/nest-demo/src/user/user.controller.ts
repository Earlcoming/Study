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

// @Controller('user')
@Controller({
  path: 'user',
  // version: '1'
})
//  localhost:3000/v1/user/123
export class UserController {
  constructor(private readonly userService: UserService) { }
  @Get('code')
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
  createUser(@Body() Body, @Session() session) {
    console.log(Body, session.code)
    return {
      code: 200
    }

  }

  @Get()
  findAll(@Query() req): Object {
    console.log(req)
    return {
      code: 200,
      msg: '信息',
      data: req
    }
  }


  @Get(":id")
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
