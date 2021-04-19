export class PostingModel {
    constructor (
    public page:number,
    public limit:number,
    public moneyessFrom:number,
    public moneyessTo:number,
    public exchange:string,
    public volatilityFrom:number,
    public volatilityTo:number,
    public baseLastPriceFrom:number,
    public baseLastPriceTo:number,
    public daysToExpirationFrom:number,
    public daysToExpirationTo:number,
    public expirationType:string,
    public tradeTime:string,
    public baseSymbolType:string,
    public symbolType:string,
    public baseSymbol:string,
    public volumeFrom:number,
    public volumeTo:number,
    public openInterestFrom:number,
    public openInterestTo:number,
    public bidPrice:number,
    public basePeRatioFrom:number,
    public basePeRatioTo:number
    ){}
}
