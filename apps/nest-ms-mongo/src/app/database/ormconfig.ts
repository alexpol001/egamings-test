import { ConnectionOptions } from 'typeorm';
import { Post } from '../post/post.entity';

const config: ConnectionOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'root',
  password: 'example',
  database: 'postgres',
  entities: [Post],
  synchronize: true,
  migrationsRun: true,
  logging: true,
  logger: 'file',
  cli: {
    migrationsDir: 'migrations',
  },
};

export default config;
