import {
  Controller,
  Get,
  Inject,
  OnApplicationBootstrap,
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { debounce } from 'helpful-decorators';

import { ApiData } from '@egamings/shared/common';
import { Observable } from 'rxjs';

@Controller()
export class AppController implements OnApplicationBootstrap {
  constructor(
    @Inject('REDIS_CLIENT') private readonly redisClient: ClientProxy,
    @Inject('RABBIT_CLIENT') private readonly rabbitClient: ClientProxy,
    @Inject('NATS_MONGO_CLIENT') private readonly natsMongoClient: ClientProxy
  ) {}

  async onApplicationBootstrap() {
    // this.connectToClient(this.redisClient);
    // this.connectToClient(this.rabbitClient);
    // this.connectToClient(this.natsMongoClient);
  }

  @Get()
  async getData(): Promise<ApiData> {
    return this.redisClient.send('get_data', []).toPromise();
  }

  @Get('rabbit')
  async getRabbitData(): Promise<ApiData> {
    return this.rabbitClient.send('get_data', []).toPromise();
  }

  @Get('mongo')
  async getMongoData(): Promise<ApiData> {
    return await this.natsMongoClient.send('get_data', []).toPromise();
  }

  @debounce(5000)
  private async connectToClient(client: ClientProxy) {
    try {
      await client.connect();
      console.log('clentProxy connected');
    } catch (error) {
      console.log(error);
      console.log(`Can't connect to clientProxy`);
      console.log('Restarting in 5 seconds...');
      await this.connectToClient(client);
    }
  }
}
