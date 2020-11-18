import { ConnectionOptions } from 'typeorm';
import * as path from 'path';
import { Post } from '../app/post/post.entity';

const config: ConnectionOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'root',
  password: 'example',
  database: 'postgres',
  entities: [Post],
  synchronize: false,
  migrations: [path.join(__dirname, './migrations/*.ts')],
};

export default config;
