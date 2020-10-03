import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './layouts';
import { GameComponent, GameListComponent } from './games';

@NgModule({
  imports: [CommonModule],
  declarations: [HeaderComponent, GameComponent, GameListComponent],
  exports: [HeaderComponent, GameComponent, GameListComponent],
})
export class SharedUiModule {}
