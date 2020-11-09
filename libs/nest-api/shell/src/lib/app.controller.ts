import { Controller, Get, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

import { ApiData } from '@egamings/shared/common';

@Controller()
export class AppController {
  constructor(
    @Inject('REDIS_SERVICE') private readonly client: ClientProxy
  ) {}

  async onApplicationBootstrap() {
    await this.client.connect();
  }

  @Get()
  getData(): Promise<ApiData> {
    return this.client.send('get_data', []).toPromise();
  }
}
