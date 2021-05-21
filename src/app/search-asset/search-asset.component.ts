import { Component, OnInit } from '@angular/core';
import { ApiInvestmentService } from '../api-investment.service';
import { AddAsset } from '../models/add-asset';
import { Asset } from "../models/asset";
import { SearchAssetService } from '../search-asset.service';


@Component({
  selector: 'app-search-asset',
  templateUrl: './search-asset.component.html',
  styleUrls: ['./search-asset.component.css']
})
export class SearchAssetComponent implements OnInit {

  searchStockInput: string;
  searchCryptoInput: string;
  sharesInput: number;
  stockResults: Asset;
  cryptoResults: Asset;

  addAssetObj: AddAsset;
  loggedInUser = JSON.parse(localStorage.getItem("SessionUser"));

  constructor(private searchAssetService: SearchAssetService, private apiInvestmentService: ApiInvestmentService) { }

  ngOnInit(): void {
    console.log(this.loggedInUser);
  }

  onGetStockClick() {
    this.searchAssetService.getStockInfo(this.searchStockInput).subscribe(result => this.stockResults = result);
    this.searchStockInput = "";
    this.cryptoResults = null;
  }

  onGetCryptoClick() {
    this.stockResults = null;
    this.searchAssetService.getCryptoInfo(this.searchCryptoInput).subscribe(result => this.cryptoResults = result);
    this.searchCryptoInput = "";
  }

  addStockClick() {
    this.addAssetObj = {
      tickerSymbol: this.stockResults.symbol,
      quantity: this.sharesInput,
      user: {
        id: this.loggedInUser.id
      }
    };
    console.log(this.addAssetObj);
    this.apiInvestmentService.addAsset(this.addAssetObj).subscribe(result => {
      console.log(result);
    })
  }

}
