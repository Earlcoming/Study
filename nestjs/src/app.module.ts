import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './User';
import { CoreModule } from './Core';
import { CoreService } from './Core/service';
import { DbModule } from './db/module';

@Module({
  imports: [UserModule, CoreModule, DbModule],
  controllers: [AppController],
  providers: [AppService, CoreService],
})
export class AppModule {}
