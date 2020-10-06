import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';

import { FilterComponent } from './filter.component';

@NgModule({
  imports: [
    CommonModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    MatListModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [FilterComponent],
  exports: [FilterComponent],
})
export class FilterModule {}
