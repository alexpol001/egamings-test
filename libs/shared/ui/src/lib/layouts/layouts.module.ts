import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { HeaderComponent } from './header/header.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FavoriteToggleComponent } from './favorite-toggle/favorite-toggle.component';
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
