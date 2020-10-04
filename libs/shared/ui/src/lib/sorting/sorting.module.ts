import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSortModule } from '@angular/material/sort';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';

import { SortingComponent } from './sorting.component';

@NgModule({
  imports: [CommonModule, MatCardModule, MatSortModule, MatDividerModule],
  declarations: [SortingComponent],
  exports: [SortingComponent],
})
export class SortingModule {}
