import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';

import { IApiData } from '@egamings/shared/domain';

import { DataService } from '@egamings/nest-ms-redis/services';

@Controller()
export class DataController {
  constructor(private readonly dataService: DataService) {}

  @MessagePattern('get_data')
  getData(@Payload() data: any): IApiData {
    return this.dataService.getData();
  }
}
