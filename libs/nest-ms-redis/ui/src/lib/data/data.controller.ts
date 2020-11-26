import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';

import { ApiData } from '@egamings/shared/domain';

import { DataService } from '@egamings/nest-ms-redis/services';

@Controller()
export class DataController {
  constructor(private readonly appService: DataService) {}

  @MessagePattern('get_data')
  getData(@Payload() data: any): ApiData {
    return this.appService.getData();
  }
}
