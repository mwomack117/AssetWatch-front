import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { PortfolioItem } from './models/portfolio-item'
import { ApiInvestmentService } from './api-investment.service';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  //private url = "https://api.twelvedata.com/quote?symbol=tsla,gdrx&apikey=1fa925de503a4dccbcda863970e0c081"
  private url = "https://api.twelvedata.com/quote?symbol="
  private key = "&apikey=1fa925de503a4dccbcda863970e0c081"

  constructor(private http: HttpClient, private apiInvestmentService: ApiInvestmentService) { }

  assetDataForUser = this.apiInvestmentService.getAllAssets().subscribe(result => {
    console.log("investments", result);
  })

  getPortfolio(data: string): Observable<PortfolioItem[]> {
    console.log(data);
    return this.http.get<PortfolioItem[]>(this.url + data + this.key);
  }
}
