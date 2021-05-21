export interface AddAsset {
    tickerSymbol: string,
    quantity: number,
    user: {
        id: number
    }
}
