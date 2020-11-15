import {
  Controller,
  Get,
  Inject,
  OnApplicationBootstrap,
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { debounce } from 'helpful-decorators';

import { ApiData } from '@egamings/shared/common';

@Controller()
export class AppController implements OnApplicationBootstrap {
  constructor(
    @Inject('REDIS_SERVICE') private readonly redisClient: ClientProxy,
    @Inject('RABBIT_SERVICE') private readonly rabbitClient: ClientProxy
  ) {}

  async onApplicationBootstrap() {
    this.connectToClient(this.redisClient);
    this.connectToClient(this.rabbitClient);
  }

  @Get()
  getData(): Promise<ApiData> {
    return this.redisClient.send('get_data', []).toPromise();
  }

  @Get('rabbit')
  getRabbitData(): Promise<ApiData> {
    return this.rabbitClient.send('get_data', []).toPromise();
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
