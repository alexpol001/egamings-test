import { ConnectionOptions } from 'typeorm';
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
  migrationsRun: true,
  migrations: [__dirname + '/migrations/*.ts'],
};

export default config;
