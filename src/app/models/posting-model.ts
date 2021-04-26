export class PostingModel {
    constructor (
        public moneyessFrom:number,
        public moneyessTo:number,
        public exchange:string,
        public volatilityFrom:number,
        public volatilityTo:number,
        public daysToExpirationFrom:number,
        public daysToExpirationTo:number,
        public expirationType:string,
        public tradeTime:string,
        public baseSymbolType:string,
        public symbolType:string,
        public baseSymbol:string,
        public bidPrice:number,
        public openInterestFrom?:number| null,
        public openInterestTo?:number| null,
        public volumeFrom?:number| null,
        public volumeTo?:number| null,
        public baseLastPriceFrom?:number| null,
        public baseLastPriceTo?:number| null,
        public basePeRatioFrom?:number| null,
        public basePeRatioTo?:number| null
    ){}
}
