import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import { join } from 'path';

import { ApiData } from '@egamings/shared/common';
@Injectable()
export class DataService {
  getData(): ApiData {
    return JSON.parse(
      fs.readFileSync(join(__dirname, 'assets/api.json')).toString()
    );
  }
}
