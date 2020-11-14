import { Injectable } from '@nestjs/common';
import { ApiData } from '@egamings/shared/common';

@Injectable()
export class AppService {
  getData(): { message: string } {
    return { message: 'Welcome to nest-mongo!' };
  }
}
