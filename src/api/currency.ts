import { API_CURRENCY_PATH, API_KEY } from "@/constants";
import { ICurrencyData } from "@/type";
import { calculateHistoricalPrice } from "@/functions";

function jsonToCurrencyData(
    json: { data: any[] },
    addHistoricalPrice?: boolean,
): ICurrencyData[] {
    return json.data.map((item: any) => {
        const currency: ICurrencyData = {
            id: item.id,
            label: item.name,
            value: item.id,
            rank: item.rank,
            slug: item.slug,
            name: item.name,
            symbol: item.symbol,
            values: item.values,
            lastUpdated: item.lastUpdated,
            circulatingSupply: item.circulatingSupply,
            category: item.category,
        };

        if (addHistoricalPrice) {
            const historical = calculateHistoricalPrice(currency.values);
            return historical ? Object.assign(currency, historical) : currency;
        }
        return currency;
    });
}

export async function fetchCurrencyWithMeta(key?: {
    limit: number;
    offset: number;
    historicalPrice?: boolean;
}) {
    try {
        const response = await fetch(
            `${API_CURRENCY_PATH}?limit=${key?.limit || 100}&offset=${key?.offset || 0}&api_key=${API_KEY}`,
        );
        const json = await response.json();
        return {
            items: jsonToCurrencyData(json, key?.historicalPrice),
            meta: json.meta,
        };
    } catch (e) {
        console.error("Error:", (e as Error).message);
        return { items: [] };
    }
}
