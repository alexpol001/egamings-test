import { Module } from '@nestjs/common';
import { SharedClientsModule } from '../shared/clients/clients.module';
import { PostResolver } from './post.resolver';

@Module({
  imports: [SharedClientsModule],
  providers: [PostResolver],
})
export class PostModule {}
