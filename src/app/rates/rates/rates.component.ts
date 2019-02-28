import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rates',
  templateUrl: './rates.component.html',
  styles: []
})
export class RatesComponent implements OnInit {
  private ratesAPi = 'https://api.exchangeratesapi.io/latest';
  private myRatesApi = 'https://api-base.herokuapp.com/api/pub/rates';

  public currentEuroRates: any = null;
  public myRates: any[] = null;

  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    this.getCurrentEuroRates();
  }
  private getCurrentEuroRates() {
    const currencies = 'USD,GBP,CHF,JPY';
    const url = `${this.ratesAPi}?symbols=${currencies}`;
    this.httpClient.get<any>(url).subscribe(apiResult => (this.currentEuroRates = apiResult));
  }

  public postRates() {
    const rates = this.transformData();
    rates.forEach(rate => this.httpClient.post(this.myRatesApi, rate).subscribe());
  }

  private transformData() {
    const current = this.currentEuroRates.rates;
    return Object.keys(current).map(key => ({
      date: this.currentEuroRates.date,
      currency: key,
      euros: current[key]
    }));
  }
  public getMyRates() {
    this.httpClient.get<any[]>(this.myRatesApi).subscribe(apiResult => (this.myRates = apiResult));
  }
  public deleteMyRates() {
    this.httpClient.delete(this.myRatesApi).subscribe();
  }
}
