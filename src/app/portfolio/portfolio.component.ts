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

  totalAssetValue: number = 0;

  ngOnInit() {

    this.apiInvestmentService.getAllAssets().subscribe(dbResults => {
      dbResults.forEach(item => this.dbSymbols.push(item["tickerSymbol"]))
      dbResults.forEach(item => this.assetQuantity.push(item["quantity"]))
      dbResults.forEach(item => this.assetId.push(item["id"]))

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
          this.getTotalAssetValue();
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
          this.getTotalAssetValue();
          console.log(this.totalAssetValue);
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

  //Note: to get the first and following rows you only need getFirstTableRow().nextSibling
  getTableHead() {
    return document.getElementById("portfolioTable").firstChild
  }

  onUpdateClick() {
    console.log(this)
    console.log(this.getTableHead())
    let head = this.getTableHead()

    //loop through the table
    for (let i = 0; i < this.assetId.length; i++) {
      //move to the next row
      head = head.nextSibling
      let currentSharesCell = <HTMLTableCellElement>head.firstChild.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling
      let currentShares = <number><unknown>currentSharesCell.innerHTML

      let updateInputBox = <HTMLInputElement>head.firstChild.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.firstChild.firstChild
      let inputtedQuantity = <number><unknown>(updateInputBox as HTMLInputElement).value

      console.log(currentShares)

      if (currentShares != inputtedQuantity && inputtedQuantity != 0) {
        this.assetToUpdate = {
          id: this.assetId[i],
          quantity: inputtedQuantity
        }
      }
    }

    this.apiInvestmentService.updateAsset(this.assetToUpdate).subscribe();
    window.location.reload();

  }

  getTotalAssetValue() {
    this.portfolioItems.forEach(item => {
      if (item.quantity > 0) {
        console.log(item.close * item.quantity);
        this.totalAssetValue += (item.quantity * item.close)
      }
    })
  }

}
