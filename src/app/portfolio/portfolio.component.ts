import { Component, OnInit } from '@angular/core';
import { PortfolioItem } from '../models/portfolio-item';
import { DbAssetItem } from '../models/db-asset-item';
import { PortfolioService } from '../portfolio.service';
import { ApiInvestmentService } from '../api-investment.service'
import { RemoveAsset } from '../models/remove-asset';
import { UpdateAsset } from '../models/update-asset';
//import { SinglePortfolioItem } from '../models/single-portfolio-item';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  portfolioItems: PortfolioItem[] = [];
  //singlePortfolioItem: SinglePortfolioItem;

  portfolioTickers: DbAssetItem[] = [];

  constructor(private portfolioService: PortfolioService, private apiInvestmentService: ApiInvestmentService) { }

  dbSymbols: string[] = [];
  assetQuantity: number[] = [];
  assetId: number[] = [];

  assetToRemove: RemoveAsset;
  assetToUpdate: UpdateAsset;
  updateValue: number;

  ngOnInit() {

    this.apiInvestmentService.getAllAssets().subscribe(dbResults => {
      console.log("dbResults", dbResults)
      dbResults.forEach(item => this.dbSymbols.push(item["tickerSymbol"]))
      dbResults.forEach(item => this.assetQuantity.push(item["quantity"]))
      dbResults.forEach(item => this.assetId.push(item["id"]))
      console.log("dbSymbols w/ join()", this.dbSymbols.join());
      console.log(this.assetQuantity);
      console.log(this.assetId);

      if (dbResults.length == 0) {
        return;
      } else if (dbResults.length == 1) {
        this.portfolioService.getPortfolio(this.dbSymbols.join()).subscribe(result => {
          let myObj = { symbol: result["symbol"], name: result["name"], exchange: result["exchange"], open: result["open"], close: result["close"] };
          this.portfolioItems.push(myObj);
          for (let i = 0; i < this.portfolioItems.length; i++) {
            for (let q = 0; q < this.assetQuantity.length; q++) {
              this.portfolioItems[q]["quantity"] = this.assetQuantity[q];
              this.portfolioItems[q]["assetId"] = this.assetId[q];
            }
          }
        })
      } else {
        this.portfolioService.getPortfolio(this.dbSymbols.join()).subscribe(result => {
          for (let key of Object.keys(result)) {
            this.portfolioItems.push(result[key]);
          }
          for (let i = 0; i < this.portfolioItems.length; i++) {
            for (let q = 0; q < this.assetQuantity.length; q++) {
              this.portfolioItems[q]["quantity"] = this.assetQuantity[q];
              this.portfolioItems[q]["assetId"] = this.assetId[q];
            }
          }
          console.log("portfolioItems", this.portfolioItems);
        });
      }
    });
  }

  onDeleteClick(id: number) {
    this.assetToRemove = {
      id
    }
    this.apiInvestmentService.deleteAsset(this.assetToRemove).subscribe();
    window.location.reload();
  }

  onUpdateClick() {
    this.assetToUpdate = {
      id: 9,
      quantity: 10
    }
    this.apiInvestmentService.updateAsset(this.assetToUpdate).subscribe();
  }

}

