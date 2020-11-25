import { Controller, Get, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { debounce } from 'helpful-decorators';

import { ApiData } from '@egamings/shared/nest/domain';
import { REDIS_CLIENT } from '../shared/clients/clients.constants';

@Controller()
export class DataController {
  constructor(
    @Inject(REDIS_CLIENT) private readonly redisClient: ClientProxy
  ) {}

  @Get()
  async getData(): Promise<ApiData> {
    return this.redisClient.send('get_data', []).toPromise();
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
