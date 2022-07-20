import { Injectable } from '@nestjs/common';

@Injectable()  //可以注入的
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
