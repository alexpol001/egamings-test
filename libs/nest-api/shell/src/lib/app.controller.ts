import { Controller, Get, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

import { ApiData } from '@egamings/shared/common';

@Controller()
export class AppController {
  constructor(
    @Inject('REDIS_SERVICE') private readonly redisClient: ClientProxy,
    @Inject('RABBIT_SERVICE') private readonly rabbitClient: ClientProxy
  ) {}

  async onApplicationBootstrap() {
    await this.redisClient.connect();
    await this.rabbitClient.connect();
  }

  @Get()
  getData(): Promise<ApiData> {
    return this.redisClient.send('get_data', []).toPromise();
  }

  @Get('rabbit')
  getRabbitData(): Promise<ApiData> {
    return this.rabbitClient.send('get_data', []).toPromise();
  }
}
