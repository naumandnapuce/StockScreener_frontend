import { AfterViewInit, Component, ComponentFactoryResolver, ViewChild } from '@angular/core';
import {OptionModel} from './models/option-model';
import {PostingModel} from './models/posting-model';
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

const ELEMENT_DATA: StockScreenerResults[] = [
  {symbol: 'AA', price: 123, type: 'Put', strike: 25.00, moneyness : '-25.25%', expDate: '25/01/2021' ,  dte: 11 ,  bid: 0.06 , midPoint: 0.08 , ask: 0.09 , last: 0.09 , volume: 500 , openInt: 1.328 , volOI: 1.05 , iv: '82%' , lastTrade: '02/05/2020'},
  {symbol: 'AA', price: 22.5, type: 'Put', strike: 25.00, moneyness : '-25.25%', expDate: '25/01/2021' ,  dte: 11 ,  bid: 0.06 , midPoint: 0.08 , ask: 0.09 , last: 0.09 , volume: 500 , openInt: 1.328 , volOI: 1.05 , iv: '82%' , lastTrade: '02/05/2020'},
  {symbol: 'AA', price: 22.5, type: 'Put', strike: 25.00, moneyness : '-25.25%', expDate: '25/01/2021' ,  dte: 11 ,  bid: 0.06 , midPoint: 0.08 , ask: 0.09 , last: 0.09 , volume: 500 , openInt: 1.328 , volOI: 1.05 , iv: '82%' , lastTrade: '02/05/2020'},
  {symbol: 'AA', price: 22.5, type: 'Put', strike: 25.00, moneyness : '-25.25%', expDate: '25/01/2021' ,  dte: 11 ,  bid: 0.06 , midPoint: 0.08 , ask: 0.09 , last: 0.09 , volume: 500 , openInt: 1.328 , volOI: 1.05 , iv: '82%' , lastTrade: '02/05/2020'},
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  blerina = new OptionModel(1,2,3,"12","23","56",3,4,false,false,true,2,3,5,3,true,false,3,3,true,false,true,true,false,true,3,3,4,5,6,3,2,6);
  
postingModel = new PostingModel(1,1000,0,0,"AMEX,NYSE,NASDAQ",0,0,0,0,0,0,"monthly,weekly","1weekAgo","1,11,7,9","put,call","baseSymbol,NIO",0,0,0,0,0,0,0);
constructor(private _optionService:OptionServiceService){}

  displayedColumns: string[] = ['symbol', 'price', 'type', 'strike', 'moneyness', 'expDate', 'dte', 'bid', 'midPoint', 'ask', 'last', 'volume', 'openInt', 'volOI', 'iv', 'lastTrade'];
  dataSource = ELEMENT_DATA;

  showResults()
  {}

  onSubmit()
  {this._optionService.postOptions(this.postingModel).subscribe(
     data => console.log('Sukses!',data),
     error =>  console.error('Error!',error)
  )

  }

  }

