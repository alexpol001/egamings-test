import { Module } from '@nestjs/common';

import { DbPostgresModule } from '@egamings/shared/nest/db';

import { NewsModule } from './news/news.module';

@Module({
  imports: [DbPostgresModule, NewsModule],
})
export class ShellModule {}
