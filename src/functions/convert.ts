import { ICurrencyData } from "@/type";
import bigDecimal from "js-big-decimal";
import { CURRENCY_FORMAT } from "@/constants";

export function roundDecimal(num: number, power: number) {
    return (
        Math.round((num + Number.EPSILON) * Math.pow(10, power)) /
        Math.pow(10, power)
    );
}
export function findConversionRate(
    fromCurrencyPriceUSD: number,
    toCurrencyPriceUSD: number,
): number {
    const conversionRate = bigDecimal.divide(
        fromCurrencyPriceUSD,
        toCurrencyPriceUSD
    );
    return Number(conversionRate);
}

export const convertCurrency = (
    amount: number,
    first: ICurrencyData,
    second: ICurrencyData,
    convertRate?: number
) => {
    if (
        first.values.USD.price === undefined ||
        second.values.USD.price === undefined
    ) {
        return undefined;
    }
    console.log("Amount:", amount, first, second);
    const rate = convertRate || findConversionRate(
        first.values.USD.price,
        second.values.USD.price,
    );
    //const firstToUSD = bigDecimal.multiply(first.values.USD.price, amount); // price in USD
    const converted = Number(bigDecimal.multiply(rate, amount));
    if (converted < 1) {
        return { converted, rate };
    }
    return {
        converted:
            converted >= 1
                ? bigDecimal.round(converted, 2)
                : CURRENCY_FORMAT.format(converted),
        rate: CURRENCY_FORMAT.format(converted),
    };
};
