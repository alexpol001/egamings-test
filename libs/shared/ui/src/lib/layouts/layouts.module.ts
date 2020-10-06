import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { NotFoundComponent } from './not-found/not-found.component';
import { FavoriteToggleComponent } from './favorite-toggle/favorite-toggle.component';
import { MatIconModule } from '@angular/material/icon';
import { ToTopComponent } from './to-top/to-top.component';

@NgModule({
  imports: [CommonModule, RouterModule, MatButtonModule, MatIconModule],
  declarations: [
    HeaderComponent,
    NotFoundComponent,
    FavoriteToggleComponent,
    ToTopComponent,
  ],
  exports: [
    HeaderComponent,
    NotFoundComponent,
    FavoriteToggleComponent,
    ToTopComponent,
  ],
})
export class LayoutsModule {}
