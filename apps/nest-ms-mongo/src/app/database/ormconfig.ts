// import { ConnectionOptions } from 'typeorm';
import { Post } from '../post/post.entity';

export default {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'root',
  password: 'example',
  database: 'postgress',
  entities: [Post],
  synchronize: true,
  migrationsRun: true,
  logging: true,
  logger: 'file',
  migrations: [__dirname + 'migrations/**/*{.ts,.js}'],
  cli: {
    migrationsDir: '/migrations',
  },
};

