import { AfterViewInit, Component, ComponentFactoryResolver, ViewChild } from '@angular/core';
import {OptionModel} from './models/option-model';
import {PostingModel} from './models/posting-model';
import {ResultModel} from './models/result-model';
import { OptionServiceService } from "../app/services/option-service.service";

export interface StockScreenerResults {
  symbol: string;
  price: number;
  type: string;
  strike: number;
  moneyness: string;
  expDate: string;
  dte: number;
  bid: number;
  midPoint: number;
  ask: number;
  last: number;
  volume: number;
  openInt: number;
  volOI: number;
  iv: string;
  lastTrade: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public TabIndex = 0;
  blerina = new OptionModel(1,2,3,"12","23","56",3,4,false,false,true,2,3,5,3,true,false,3,3,true,false,true,true,false,true,3,3,4,5,6,3,2,6);
  
postingModel = new PostingModel(-200,-8, "AMEX,NYSE,NASDAQ",40,100,5, 250,0,15,"monthly,weekly","previousTradingDay","1", "put","",100,250,0.2,100);
constructor(private _optionService:OptionServiceService){}

  displayedColumns: string[] = ['symbol', 'price', 'type', 'strike', 'moneyness', 'expDate', 'dte', 'bid', 'midPoint', 'ask', 'last', 'volume', 'openInt', 'volOI', 'iv', 'lastTrade'];
  dataSource =  [];

  onSubmit()
  {
    this._optionService.postOptions(this.postingModel).subscribe(
      data => this.FillResult(data),
      error =>  console.error('Error!',error))


      
  }
  FillResult(data:any){
    console.log(data);
    this.dataSource = data.data;

    this.TabIndex = 1;
  }
  }

