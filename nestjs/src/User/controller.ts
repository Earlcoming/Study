import { Controller, Get, Logger } from '@nestjs/common';
import { UserService } from './service';

@Controller('user')
export class UserController {
  private readonly logger;
  constructor(private readonly userService: UserService) {
    this.logger = new Logger('user Control')
  }

  @Get()
  getUser(): string {
    console.log('aaa ==== ')
    Logger.log('nest log')
    this.logger.log('control logger')
    return this.userService.getUser();
  }
  @Get('all')
  getAllUser(): number {
    return this.userService.getAllUser()
  }
}
