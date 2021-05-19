import { Component, OnInit } from '@angular/core';
import { Asset } from "../models/asset";
import { SearchAssetService } from '../search-asset.service';


@Component({
  selector: 'app-search-asset',
  templateUrl: './search-asset.component.html',
  styleUrls: ['./search-asset.component.css']
})
export class SearchAssetComponent implements OnInit {

  searchStockInput: string;
  searchCCInput: string;
  sharesInput: number;
  assetResults: Asset;

  constructor(private searchAssetService: SearchAssetService) { }

  ngOnInit(): void {
  }

  onGetStockClick() {
    this.searchAssetService.getStockInfo(this.searchStockInput).subscribe(result => this.assetResults = result);
  }

  onGetCryptoClick() {
    this.searchAssetService.getCryptoInfo(this.searchCCInput).subscribe(result => this.assetResults = result);
  }

  addAssetClick() { }

}
