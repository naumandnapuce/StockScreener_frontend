import { AfterViewInit, Component, ComponentFactoryResolver, ViewChild } from '@angular/core';
import {OptionModel} from './models/option-model';
import {PostingModel} from './models/posting-model';
import { OptionServiceService } from "../app/services/option-service.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public TabIndex = 0;
  optionModel = <OptionModel>{};//vlerat te mbahen ne sesion
  postingModel= <PostingModel>{};
  isValidModel=true;
  constructor(private _optionService:OptionServiceService){}

  displayedColumns: string[] = ['symbol', 'price', 'type', 'strike', 'moneyness', 'expDate', 'bid', 'last', 'volume', 'openInt', 'iv', 'last', 'earningsDate', 'marketCap', 'basePeRatio'];
  dataSource =  [];

  onSubmit()
  {
    //console.log("Te dhenat hyrese: "+this.optionModel);
    //validojme formen per input te paplotesuar
    this.isValidModel = this.IsValidInput(this.optionModel);
    if (this.isValidModel){
      //1. Marrim objektin e formes optionModel dhe pergatisim objektin per postim
      this.postingModel = this.FillPostingModel(this.optionModel);
      //2. Postojme objektin dhe mbushim griden
      this._optionService.postOptions(this.postingModel).subscribe(
        data => this.FillResult(data),
        error =>  console.error(this.postingModel,error))  
      }
  }

  FillResult(data:any){
     console.log(data);
    this.dataSource = data.data;
    this.TabIndex = 1;
  }

  FillPostingModel(optionModel: OptionModel): PostingModel {
    // mbushje e checkboxeve
    let exchangeResult: any;
    exchangeResult="";
    if (optionModel.exchange1==true) {exchangeResult+=",AMEX";}
    if (optionModel.exchange2==true) {exchangeResult+=",NYSE" ;}
    if (optionModel.exchange3==true) {exchangeResult+=",NASDAQ" ;}
    if (exchangeResult != ""){exchangeResult = exchangeResult.substring(1);} else {exchangeResult = null;}

    let expirationTypeResult: any;
    expirationTypeResult="";
    if (optionModel.weeklyExp==true) {expirationTypeResult+=",monthly";}
    if (optionModel.monthlyExp==true) {expirationTypeResult+=",weekly" ;}
    if (expirationTypeResult != ""){expirationTypeResult = expirationTypeResult.substring(1);} else {expirationTypeResult=null;}

    let symbolTypeResult: any;
    symbolTypeResult = "";
    if (optionModel.optCall==true) {symbolTypeResult+=",call";}
    if (optionModel.optPut==true) {symbolTypeResult+=",put" ;}
    if (symbolTypeResult != ""){symbolTypeResult = symbolTypeResult.substring(1);}else {symbolTypeResult=null;}

    let baseSymbolTypeResult: any;
    baseSymbolTypeResult = "";
    if (optionModel.secStock==true) {baseSymbolTypeResult+=",1";}
    if (optionModel.secNonStock==true) {baseSymbolTypeResult+=",11" ;}
    if (optionModel.secEtf==true) {baseSymbolTypeResult+=",7" ;}
    if (optionModel.secIndex==true) {baseSymbolTypeResult+=",9" ;}
    if (baseSymbolTypeResult !=  ""){baseSymbolTypeResult = baseSymbolTypeResult.substring(1);} else {baseSymbolTypeResult = null;}

    //marrja nga combo

    let lastTradeResult:  any;
    if (optionModel.lastTradeVal==1) {lastTradeResult="lastTradingDay";}
    if (optionModel.lastTradeVal==2) {lastTradeResult="previousTradingDay";}
    if (optionModel.lastTradeVal==3) {lastTradeResult="1weekAgo";}
    if (optionModel.lastTradeVal==4) {lastTradeResult="2weeksAgo";}
    if (lastTradeResult ==undefined) {lastTradeResult= null}


    //kthimi i vlerave  undefined

    if (optionModel.symbol ==undefined) {optionModel.symbol= null}
    if (optionModel.marketCapFrom ==undefined) {optionModel.marketCapFrom= null}
    if (optionModel.marketCapTo ==undefined) {optionModel.marketCapTo= null}
    if (optionModel.optOpIntTo ==undefined) {optionModel.optOpIntTo= null}
    if (optionModel.optVolTo ==undefined) {optionModel.optVolTo= null}
    if (optionModel.ratioFrom ==undefined) {optionModel.ratioFrom= null}

    //this.postingModel = new PostingModel(-200,-8,"AMEX,NYSE,NASDAQ",40,200,0,15,"monthly,weekly","previousTradingDay","1","put","",0.2,250,null,100,null,5,250,null,100);
    //console.log(this.postingModel);
    //mbushje e objektit postingModel

    this.postingModel = <PostingModel><unknown>{
      moneyessFrom: optionModel.moneyessFrom,
      moneyessTo: optionModel.moneyessTo,
      exchange: exchangeResult,
      volatilityFrom: optionModel.strikeFrom,
      volatilityTo: optionModel.strikeTo,
      daysToExpirationFrom: optionModel.daysToExpFrom,
      daysToExpirationTo: optionModel.daysToExpTo,
      expirationType: expirationTypeResult,
      tradeTime: lastTradeResult,
      baseSymbolType: baseSymbolTypeResult,
      symbolType: symbolTypeResult,
      marketCapFrom: optionModel.marketCapFrom,
      marketCapTo: optionModel.marketCapTo,
      baseSymbol: optionModel.symbol,
      bidPrice: optionModel.bid,
      openInterestFrom: optionModel.optOpIntFrom,
      openInterestTo: optionModel.optOpIntTo,
      volumeFrom:  optionModel.optVolFrom,
      volumeTo: optionModel.optVolTo,
      baseLastPriceFrom: optionModel.lastPriceFrom,
      baseLastPriceTo: optionModel.lastPriceTo,
      basePeRatioFrom: optionModel.ratioFrom,
      basePeRatioTo: optionModel.ratioTo
    } 

    console.log(this.postingModel);


    return this.postingModel;
  }

  IsValidInput(optionModel: OptionModel): boolean {
    let isvalid: boolean = true;
    return isvalid;
  }
}


