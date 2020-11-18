import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DbModule } from '../db/db.module';
import { PostModule } from './post/post.module';

@Module({
  imports: [DbModule, PostModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
