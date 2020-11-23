import { Module } from '@nestjs/common';
import { DbModule } from '../db/db.module';

import { NewsModule } from '@egamings/nest-ms-rabbit/shell';

@Module({
  imports: [DbModule, NewsModule],
})
export class AppModule {}
