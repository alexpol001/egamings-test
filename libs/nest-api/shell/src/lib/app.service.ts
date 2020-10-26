import { ApiData } from '@egamings/shared/common';
import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import { join } from 'path';

@Injectable()
export class AppService {
  getData(): ApiData {
    return JSON.parse(
      fs
        .readFileSync(join(__dirname, 'assets/api.json'))
        .toString()
    );
  }
}
