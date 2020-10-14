import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { AngularUniversalModule } from '@nestjs/ng-universal';
import { join } from 'path';
// tslint:disable-next-line: nx-enforce-module-boundaries
import { AppServerModule } from '@egamings/frontend/server-module';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    // ServeStaticModule.forRoot({
    //   rootPath: join(__dirname, '..', 'frontend'),
    // }),
    AngularUniversalModule.forRoot({
      bootstrap: AppServerModule,
      viewsPath: join(process.cwd(), 'dist/apps/frontend'),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
