export class ResultModel {
    constructor (
        public symbol:string,
        public baseSymbol:string,
        public baseLastPrice:string,
        public symbolType:string,
        public baseSymbolType:string,
        public strikePrice:string,
        public moneyness:string,
        public expirationDate:string,
        public daysToExpiration:string,
        public bidPrice:string,
        public midpoint:string,
        public askPrice:string,
        public lastPrice:string,
        public volume:string,
        public openInterest:string,
        public volumeOpenInterestRatio:string,
        public volatility:string,
        public tradeTime:string,
        public expirationType:string,
        public earningsDate:string,
        public marketCap:string,
        public basePeRatio:string
    ){}
}

