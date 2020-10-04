import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatPaginatorModule } from '@angular/material/paginator';

import { PaginatorComponent } from './paginator.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [PaginatorComponent],
  imports: [CommonModule, MatPaginatorModule, MatCardModule],
  exports: [PaginatorComponent],
})
export class PaginatorModule {}
