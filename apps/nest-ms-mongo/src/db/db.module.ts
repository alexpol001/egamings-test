import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as path from 'path';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      database: 'postgres',
      port: 5432,
      // type: 'mongodb',
      // host: 'localhost',
      // database: 'mongo',
      // port: 27017,
      // authSource: 'admin',
      username: 'root',
      password: 'example',
      // entities: [Post],
      autoLoadEntities: true,
      migrations: [path.join(__dirname, './migration/*{.ts,.js')],
      migrationsRun: true,
      synchronize: true,
    }),
  ],
})
export class DatabaseModule {}
