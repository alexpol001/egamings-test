import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [CommonModule, HttpClientModule],
})
export class DataAccessModule {
  constructor(private httpClient: HttpClient) {
    this.httpClient.get('/assets/api.json').subscribe((data) => {
      console.log(data, 'This is api data');
    });
  }
}
