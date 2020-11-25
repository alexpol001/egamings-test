import { Module } from '@nestjs/common';

import { DataModule } from '@egamings/nest-ms-redis/ui';

@Module({
  imports: [DataModule],
})
export class ShellModule {}
