import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  imports: [CommonModule, RouterModule, MatButtonModule],
  declarations: [HeaderComponent, NotFoundComponent],
  exports: [HeaderComponent, NotFoundComponent],
})
export class LayoutsModule {}
