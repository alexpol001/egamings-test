import { Module } from '@nestjs/common';

import { DbPostgresModule } from '@egamings/shared/nest/db-postgres';

import { NewsModule } from '@egamings/nest-ms-rabbit/ui';

@Module({
  imports: [DbPostgresModule, NewsModule],
})
export class ShellModule {}
