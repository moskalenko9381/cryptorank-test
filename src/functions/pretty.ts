import bigDecimal from "js-big-decimal";

function divideAndRound(first: number, second: number, round: number) {
    return bigDecimal.round(bigDecimal.divide(first, second), round);
}

export function getPrettyValueOfNumber(value: number | undefined): string {
    if (!value) {
        return "";
    }
    const rounded = bigDecimal.round(String(value), value >= 1 ? 2 : 4);
    if (value < 1e3) {
        return rounded;
    }
    const roundedAsNumber = Number(rounded);
    if (roundedAsNumber >= 1e3 && roundedAsNumber < 1e6) {
        return `${divideAndRound(roundedAsNumber, 1e3, 2) }K`;
    }
    if (roundedAsNumber >= 1e6 && roundedAsNumber < 1e9) {
        return `${divideAndRound(roundedAsNumber, 1e6, 2) }M`;
    }
    if (roundedAsNumber >= 1e9 && roundedAsNumber < 1e12) {
        return `${divideAndRound(roundedAsNumber, 1e9, 2) }B`;
    }
    return `${divideAndRound(roundedAsNumber, 1e12, 2) }T`;
}
