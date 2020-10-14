import { Body, Controller, Get, Param } from '@nestjs/common';
import { IApiData } from '@egamings/shared/models';

@Controller('api')
export class AppController {
  // constructor(private readonly appService: AppService) {}

  @Get()
  getData() {
    return {
      token: 'token string',
      expectedAt: 3600
    }
  }
}
