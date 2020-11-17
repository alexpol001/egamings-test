// import { ConnectionOptions } from 'typeorm';
import { Post } from '../post/post.entity';

module.exports = {
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
  migrations: [__dirname + 'migrations/**/*{.ts,.js}'],
  cli: {
    migrationsDir: 'migrations',
  },
};
