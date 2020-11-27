import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import { join } from 'path';

import { IApiData } from '@egamings/shared/domain';
@Injectable()
export class DataService {
  getData(): IApiData {
    return JSON.parse(
      fs.readFileSync(join(__dirname, 'assets/api.json')).toString()
    );
  }
}
