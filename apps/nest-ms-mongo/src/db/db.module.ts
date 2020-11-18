import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import DB_ORMCONFIG from './db.ormconfig';

@Module({
  imports: [
    TypeOrmModule.forRoot(DB_ORMCONFIG),
    // TypeOrmModule.forRoot({
    //   type: 'postgres',
    //   host: 'localhost',
    //   database: 'postgres',
    //   port: 5432,
    //   // type: 'mongodb',
    //   // host: 'localhost',
    //   // database: 'mongo',
    //   // port: 27017,
    //   // authSource: 'admin',
    //   username: 'root',
    //   password: 'example',
    //   // entities: [Post],
    //   autoLoadEntities: true,
    //   migrations: [path.join(__dirname, './migration/*{.ts,.js')],
    //   migrationsRun: true,
    //   synchronize: true,
    // }),
  ],
})
export class DbModule {}
