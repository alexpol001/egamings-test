import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { HeaderComponent } from './header/header.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FavoriteToggleComponent } from './favorite-toggle/favorite-toggle.component';
import { StepperComponent } from './stepper/stepper.component';

@NgModule({
  imports: [CommonModule, RouterModule, MatButtonModule, MatIconModule],
  declarations: [
    HeaderComponent,
    NotFoundComponent,
    FavoriteToggleComponent,
    StepperComponent,
  ],
  exports: [
    HeaderComponent,
    NotFoundComponent,
    FavoriteToggleComponent,
    StepperComponent,
  ],
})
export class LayoutsModule {}
