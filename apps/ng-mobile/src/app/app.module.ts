import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShellComponent, ShellModule } from '@egamings/ng-mobile/shell';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ShellModule,
  ],
  bootstrap: [ShellComponent],
})
export class AppModule {}
