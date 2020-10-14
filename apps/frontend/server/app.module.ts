import { Module } from '@nestjs/common';
import { AngularUniversalModule } from '@nestjs/ng-universal';
import { join } from 'path';
// import { AppServerModule } from '../src/main.server';
import { AppServerModule } from '../src/app/app.server.module';
import { AppController } from './app.controller';

@Module({
  imports: [
    AngularUniversalModule.forRoot({
      bootstrap: AppServerModule,
      viewsPath: join(__dirname, '..', 'frontend'),
    }),
  ],
  controllers: [AppController],
})
export class AppModule {}
