import { Body, Controller, Get, Param } from '@nestjs/common';
import { IApiData } from '@egamings/shared/models';

import { AppService } from './app.service';


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getData() {
    console.log(this.appService.getData());
    return {
      token: 'token string',
      expectedAt: 3600,
    };
  }
}
