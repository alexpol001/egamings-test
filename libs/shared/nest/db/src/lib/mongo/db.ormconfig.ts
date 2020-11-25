import { ConnectionOptions } from 'typeorm';
import * as path from 'path';
import { PostEntity } from '@egamings/shared/nest/domain';

const config: ConnectionOptions = {
  type: 'mongodb',
  host: 'localhost',
  database: 'mongo',
  port: 27017,
  authSource: 'admin',
  username: 'root',
  password: 'example',
  entities: [PostEntity],
  synchronize: false,
  migrations: [path.join(__dirname, './migrations/*.ts')],
};

export default config;
