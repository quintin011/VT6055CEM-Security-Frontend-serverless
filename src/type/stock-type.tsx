export type Stock = {
    symbol: string
    updated_at: string
    currbid: number
    currask: number
    lasttrade: number
    high_price: number
    low_price: number
    vol: number
    other: {
        strokeColor: string
        upDown: string
        company: string
    }

}

export type StockHold = {
    stock: Stock
    quantity: number
    percent: number
}



// {
//     "symbol": "0001",
//     "updated_at": "2024-08-29T00:00:00Z",
//     "currbid": 12,
//     "currask": 14,
//     "lasttrade": 14,
//     "high_price": 16,
//     "low_price": 12,
//     "vol": 1024
// },


// {
//     "method":"buy/sell",
//     "order":"limit/price",
//     "place":"standard/bid",
//     "symbol":"0001",
//     "price":123,
//     quantity:123
// }