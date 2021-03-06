import { Module } from '@nestjs/common';

import { DbMongoModule } from '@egamings/shared/nest/db-mongo';

import { PostModule } from '@egamings/nest-ms-mongo/ui';

@Module({
  imports: [DbMongoModule, PostModule],
})
export class ShellModule {}
