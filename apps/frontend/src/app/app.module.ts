import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  EgamingsShellComponent,
  EgamingsShellModule,
} from '@egamings/feature-shell';

@NgModule({
  imports: [BrowserModule, BrowserAnimationsModule, EgamingsShellModule],
  exports: [EgamingsShellModule],
  bootstrap: [EgamingsShellComponent],
})
export class AppModule {}
