import { ConnectionOptions } from 'typeorm';
import * as path from 'path';
import { NewsEntity } from '@egamings/shared/nest/domain';

const config: ConnectionOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'root',
  password: 'example',
  database: 'postgres',
  entities: [NewsEntity],
  synchronize: false,
  migrations: [path.join(__dirname, './migrations/*.ts')],
};

export default config;
