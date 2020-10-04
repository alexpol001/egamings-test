import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSortModule } from '@angular/material/sort';
import { MatCardModule } from '@angular/material/card';

import { SortingComponent } from './sorting.component';

@NgModule({
  imports: [CommonModule, MatCardModule, MatSortModule],
  declarations: [SortingComponent],
  exports: [SortingComponent],
})
export class SortingModule {}
