export type ICurrencyPrice = {
    [key: string]: {
        price: number;
        marketCap: number;
        percentChange24h: number;
        percentChange7d: number;
        percentChange30d: number;
        percentChange3m: number;
        percentChange6m: number;
    };
};

export type ICurrencyData = {
    id: number;
    rank: number;
    slug: string;
    name: string;
    symbol: string;
    values: ICurrencyPrice;
    lastUpdated: string;
    circulatingSupply: number;
    category: string;
    label: string;
    value: number;
    historicalPrice24h?: string;
    historicalPrice7d?: string;
    historicalPrice30d?: string;
    historicalPrice3m?: string;
    historicalPrice6m?: string;
};
