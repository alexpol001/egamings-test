import { Module } from '@nestjs/common';

import { ShellModule } from '@egamings/nest-ms-redis/shell';

@Module({
  imports: [ShellModule],
})
export class AppModule {}
