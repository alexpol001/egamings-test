import { Controller } from '@nestjs/common';
import { Ctx, EventPattern, MessagePattern, Payload, RedisContext } from '@nestjs/microservices';

import { ApiData } from '@egamings/shared/common';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern('get_data')
  getData(@Payload() data: any): ApiData {
    return this.appService.getData();
  }
}
