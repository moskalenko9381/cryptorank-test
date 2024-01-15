import {calculate} from "@/functions/history";
import {CURRENCY_FORMAT} from "@/constants";

describe("Historical price", () => {
    describe("Currency format should be no more than 20 signs and with separators", () => {
        it("long float bigger than 1B", () => {
            const res = CURRENCY_FORMAT.format(897307795085.1793);
            expect(res).toBeDefined();
            expect(res).toEqual("897,307,795,085.1793");
        });
        
        it("long float less than 1 and less then 20 signs", () => {
            const res = CURRENCY_FORMAT.format(0.00000008);
            expect(res).toBeDefined();
            expect(res).toEqual("0.00000008");
        });

        it("long float less than 1 and more then 20 signs", () => {
            // eslint-disable-next-line no-loss-of-precision
            const res = CURRENCY_FORMAT.format(0.674888999444222111888);
            expect(res).toBeDefined();
            expect(res).toEqual("0.6748889994442221");
        });
    });


    describe("calculation of historical price", () => {
        it("should return rounded value to 2 precision when percents 0", () => {
            const result = calculate(0, 17.333);
            expect(result).toBeDefined();
            expect(result).toEqual("17.33");
        });

        it("should return undefined if no percents", () => {
            const USDPrice = 42;
            const percents = undefined;
            const result = calculate(percents, USDPrice);
            expect(result).toBeUndefined();
        });

        it("should return bigger price than current if percents are negative", () => {
            const USDPrice = 42686.15114680548;
            const percents = -1.0009;
            const result = calculate(percents, USDPrice);
            expect(result).toBeDefined();
            expect(Number(result)).toEqual(43117.72);
        });

        it("should return less price than current if percents are positive " +
            "& not rounded when price less than 1", () => {
            const USDPrice = 0.540279994416;
            const percents = 10.5946;
            const result = calculate(percents, USDPrice);
            expect(result).toBeDefined();
            expect(Number(result)).toEqual(0.48852294);
        });

        it("should return less price than current if percents are positive " +
            "& not rounded when price < 1 (percents > 100)", () => {
            const USDPrice = 0.540279994416;
            const percents = 286.0548;
            const result = calculate(percents, USDPrice);
            expect(result).toBeDefined();
            expect(Number(result)).toEqual(0.13994904);
        });

        it("should return undefined id percents < 100", () => {
            const USDPrice = 0.540279994416;
            const percents = -186.0548;
            const result = calculate(percents, USDPrice);
            expect(result).toBeUndefined();
        });
    });
});