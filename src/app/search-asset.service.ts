import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Asset } from './models/asset';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchAssetService {

  private apiKey = "1fa925de503a4dccbcda863970e0c081";
  private searchUrl = "https://api.twelvedata.com/quote?symbol="

  constructor(private http: HttpClient) { }

  getStockInfo(symbol: string): Observable<Asset> {
    symbol = symbol.trim();
    const url = `${this.searchUrl}${symbol}&apikey=${this.apiKey}`;
    return this.http.get<Asset>(url);
  }

  getCryptoInfo(symbol: string): Observable<Asset> {
    symbol = symbol.trim();
    const url = `${this.searchUrl}${symbol}/usd&apikey=${this.apiKey}`;
    return this.http.get<Asset>(url);
  }
}

