import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSortModule } from '@angular/material/sort';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';

import { SortingComponent } from './sorting.component';
import { LayoutsModule } from '../layouts/layouts.module';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatSortModule,
    MatDividerModule,
    MatIconModule,
    LayoutsModule,
  ],
  declarations: [SortingComponent],
  exports: [SortingComponent],
})
export class SortingModule {}
