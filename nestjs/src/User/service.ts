import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  getUser(): string {
    return '我是一个user'
  }
  getAllUser(): number {
    return 123456
  }
}
