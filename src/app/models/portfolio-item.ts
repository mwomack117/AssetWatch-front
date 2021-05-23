export interface PortfolioItem {
    symbol: string,
    name: string,
    exchange: string,
    open: number,
    close: number,
    quantity?: number,
}
