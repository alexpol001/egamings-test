import { Module } from '@nestjs/common';

import { ShellModule } from '@egamings/nest-ms-rabbit/shell';

@Module({
  imports: [ShellModule],
})
export class AppModule {}
