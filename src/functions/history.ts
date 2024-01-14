import { ICurrencyPrice } from "@/type";
import bigDecimal from "js-big-decimal";
import { CURRENCY_FORMAT } from "@/constants";

function calculate(percents: number, currentValue: number) {
    if (percents === 0) {
        return String(currentValue);
    }
    if (!percents) {
        return undefined;
    }
    const updatedPercents = bigDecimal.add(bigDecimal.divide(percents, 100), 1);
    const historicalPrice = Number(
        bigDecimal.multiply(updatedPercents, String(currentValue)),
    );
    return historicalPrice >= 1
        ? bigDecimal.round(historicalPrice, 2)
        : CURRENCY_FORMAT.format(historicalPrice);
}

export function calculateHistoricalPrice(data: ICurrencyPrice) {
    if (!data.USD) {
        return undefined;
    }
    const {
        price,
        percentChange24h,
        percentChange7d,
        percentChange30d,
        percentChange3m,
        percentChange6m,
    } = data.USD;
    return {
        historicalPrice24h: calculate(percentChange24h, price),
        historicalPrice7d: calculate(percentChange7d, price),
        historicalPrice30d: calculate(percentChange30d, price),
        historicalPrice3m: calculate(percentChange3m, price),
        historicalPrice6m: calculate(percentChange6m, price),
    };
}
