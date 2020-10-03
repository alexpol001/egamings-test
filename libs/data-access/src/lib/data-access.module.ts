import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [CommonModule, HttpClientModule],
})
export class DataAccessModule {
  constructor(private httpClient: HttpClient) {
    this.httpClient
      .get('https://www.rost.bet/api/v1/games?lang=en')
      .subscribe((data) => {
        console.log(data);
      });
  }
}
