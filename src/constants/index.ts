export const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
export const API_CURRENCY_PATH = "https://api.cryptorank.io/v1/currencies";

export const PAGE_SIZE = 10;

export const CURRENCY_FORMAT = Intl.NumberFormat("en-GB", {
    maximumSignificantDigits: 20
});
