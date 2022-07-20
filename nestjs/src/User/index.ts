import { Module } from '@nestjs/common';
import { UserService } from './service';
import { UserController } from './controller';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule { }
