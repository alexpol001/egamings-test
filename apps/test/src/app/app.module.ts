import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EgamingsShellComponent, EgamingsShellModule } from '@egamings/feature-shell';

@NgModule({
  imports: [BrowserModule, EgamingsShellModule],
  exports: [EgamingsShellModule],
  bootstrap: [EgamingsShellComponent],
})
export class AppModule {}
