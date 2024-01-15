import {getPrettyValueOfNumber} from "@/functions/pretty";

describe("pretty format of currency", () => {
    it("should return rounded value to 4 precision when value < 1", () => {
        const initial = 0.034294242;
        const result = getPrettyValueOfNumber(initial);
        expect(result).toEqual("0.0343");
    });

    it("should return empty string if value undefined", () => {
        const result = getPrettyValueOfNumber(undefined);
        expect(result).toHaveLength(0);
    });

    it("should return rounded value to 4 precision when value < 1000 and > 1", () => {
        const initial = 5.00000008;
        const result = getPrettyValueOfNumber(initial);
        expect(result).toEqual("5.00");
    });

    it("should return rounded value to 2 precision with K", () => {
        const initial = 535353;
        const result = getPrettyValueOfNumber(initial);
        expect(result).toEqual("535.35K");
    });

    it("should return rounded value to 2 precision with M", () => {
        const initial = 44073085.152273;
        const result = getPrettyValueOfNumber(initial);
        expect(result).toEqual("44.07M");
    });

    it("should return rounded value to 2 precision with B", () => {
        const initial = 897307795085.1793;
        const result = getPrettyValueOfNumber(initial);
        expect(result).toEqual("897.31B");
    });

    it("should return rounded value to 2 precision with T for very large value", () => {
        // eslint-disable-next-line no-loss-of-precision
        const initial = 9697778997995085.88;
        const result = getPrettyValueOfNumber(initial);
        expect(result).toEqual("9697.78T");
    });
});