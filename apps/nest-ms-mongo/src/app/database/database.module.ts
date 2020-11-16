import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      host: 'localhost',
      database: 'mongo',
      port: 27017,
      authSource: 'admin',
      username: 'root',
      password: 'example',
      entities: [],
      synchronize: true,
    }),
  ],
})
export class DatabaseModule {}
