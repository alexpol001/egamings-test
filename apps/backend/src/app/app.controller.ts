import { Body, Controller, Get, Param } from '@nestjs/common';
import { ApiData } from '@egamings/shared/common';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getData(): ApiData {
    return this.appService.getData();
  }
}
