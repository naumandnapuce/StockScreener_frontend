export class PostingModel {
    constructor (
        public moneyessFrom:number,
        public moneyessTo:number,
        public volatilityFrom:number,
        public volatilityTo:number,
        public daysToExpirationFrom:number,
        public daysToExpirationTo:number,
        public bidPrice:number,
        public openInterestFrom:number,
        public basePeRatioTo:number,
        public baseLastPriceFrom:number,
        public baseLastPriceTo:number,
        public volumeFrom:number,
        public openInterestTo?:number| null,
        public volumeTo?:number| null,
        public basePeRatioFrom?:number| null,
        public baseSymbol?:string| null,
        public marketCapFrom?:string| null,
        public marketCapTo?:string| null,
        public exchange?:string| null,
        public expirationType?:string| null,
        public tradeTime?:string| null,
        public baseSymbolType?:string| null,
        public symbolType?:string| null
    ){}
}
