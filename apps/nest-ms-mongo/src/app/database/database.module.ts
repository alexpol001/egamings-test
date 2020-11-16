import { Post } from '@egamings/shared/server/common';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

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
      autoLoadEntities: true,
      synchronize: true
    }),
  ],
})
export class DatabaseModule {}
