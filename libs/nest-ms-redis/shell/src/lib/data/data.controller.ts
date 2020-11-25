import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';

import { ApiData } from '@egamings/shared/nest/domain';

import { DataService } from './data.service';

@Controller()
export class DataController {
  constructor(private readonly appService: DataService) {}

  @MessagePattern('get_data')
  getData(@Payload() data: any): ApiData {
    return this.appService.getData();
  }
}
