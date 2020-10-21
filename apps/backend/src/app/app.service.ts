import { IApiData } from '@egamings/shared/models';
import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import { join } from 'path';

@Injectable()
export class AppService {
  getData(): IApiData {
    return JSON.parse(
      fs
        .readFileSync(join(__dirname, 'assets/api.json'))
        .toString()
    );
  }
}
