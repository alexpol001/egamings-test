import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { AngularUniversalModule } from '@nestjs/ng-universal';
import { join } from 'path';
// tslint:disable-next-line: nx-enforce-module-boundaries
import { AppServerModule } from 'apps/frontend/src/app/app.server.module';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    AngularUniversalModule.forRoot({
      bootstrap: AppServerModule,
      viewsPath: join(__dirname, '..', 'frontend'),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

