import { Module } from '@nestjs/common';
import { SharedClientsModule } from '../shared/clients/clients.module';
import { NewsResolver } from './news.resolver';

@Module({
  imports: [SharedClientsModule],
  providers: [NewsResolver],
})
export class NewsModule {}
