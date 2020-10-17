import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import { join } from 'path';

@Injectable()
export class AppService {
  getData() {
    return fs.readFileSync(join(__dirname, '/assets/api.json'), {
      encoding: 'UTF-8',
    });
  }
}
