import { Module } from '@nestjs/common';

import { ShellModule } from '@egamings/nest-ms-mongo/shell';

@Module({
  imports: [ShellModule],
})
export class AppModule {}
