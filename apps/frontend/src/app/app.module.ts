import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {TransferHttpCacheModule} from '@nguniversal/common';

// import { EgamingsShellComponent} from './app.component';
import {
  EgamingsShellComponent,
  EgamingsShellModule,
} from '@egamings/feature-shell';

@NgModule({
  // declarations: [EgamingsShellComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    BrowserModule.withServerTransition({ appId: 'frontendApp' }),
    EgamingsShellModule,
    // Cache for httpRequest data
    TransferHttpCacheModule
  ],
  exports: [EgamingsShellModule],
  // exports: [EgamingsShellComponent],
  bootstrap: [EgamingsShellComponent],
})
export class AppModule {}
