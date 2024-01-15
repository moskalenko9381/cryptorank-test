import { ICurrencyPrice } from "@/type";
import bigDecimal from "js-big-decimal";
import { CURRENCY_FORMAT } from "@/constants";

export function calculate(percents: number | undefined, currentValue: number) {
    if (typeof percents === "undefined" || percents < -100) {
        return undefined;
    }
    if (percents === 0) {
        return bigDecimal.round(currentValue, 2);
    }
    const currentPercentsFromPast = 100 + percents; // 100 + (-1.001)
    const valueMultiplied100 = bigDecimal.multiply(currentValue, 100);
    const historicalPrice = bigDecimal.divide(valueMultiplied100, currentPercentsFromPast);
    const priceToNumber = Number(historicalPrice);
    return priceToNumber >= 1
        ? bigDecimal.round(historicalPrice, 2)
        : CURRENCY_FORMAT.format(priceToNumber);
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
