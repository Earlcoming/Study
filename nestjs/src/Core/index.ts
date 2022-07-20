import { Module } from '@nestjs/common';
import { CoreService } from './service';

@Module({
  imports: [],
  controllers: [],
  providers: [CoreService],
  exports: [CoreService],
})
export class CoreModule {}
