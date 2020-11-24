import { Module } from '@nestjs/common';
import { ShellModule } from '@egamings/nest-api/shell';

@Module({
  imports: [ShellModule],
})
export class AppModule {}
