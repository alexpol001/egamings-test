import { ConnectionOptions } from 'typeorm';
import * as path from 'path';
import { News } from '../app/news/news.entity';

const config: ConnectionOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'root',
  password: 'example',
  database: 'postgres',
  entities: [News],
  synchronize: false,
  migrations: [path.join(__dirname, './migrations/*.ts')],
};

export default config;
