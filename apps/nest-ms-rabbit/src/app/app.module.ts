import { Module } from '@nestjs/common';
import { DbModule } from '../db/db.module';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostModule } from './post/post.module';

@Module({
  imports: [DbModule, PostModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
