import { fetchCurrencyWithMeta } from "@/api/currency";
import mockedResponse from "./response.json";
describe("currency api", () => {
    it("should return empty array if error", async () => {
        const message = "No data";
        jest.spyOn(global, "fetch").mockRejectedValue(new Error(message));
        await expect(await fetchCurrencyWithMeta()).toEqual({ items: [] });
    });

    it("should return data with meta and historical price", async () => {
        jest.spyOn(global, "fetch").mockResolvedValue({
            ok: true,
            status: 200,
            json: async () => mockedResponse
        } as Response);

        const result = await fetchCurrencyWithMeta({limit: 1, offset: 1, historicalPrice: true});
        expect(result.items).toHaveLength(1);
        expect(result.meta.count).toBeDefined();
        expect(result.meta.count).toEqual(6059);
        result.items.forEach((item) => {
            expect(item.historicalPrice24h).toBeDefined();
            expect(item.historicalPrice7d).toBeDefined();
            expect(item.historicalPrice30d).toBeDefined();
            expect(item.historicalPrice3m).toBeDefined();
            expect(item.historicalPrice6m).toBeDefined();
        });
    });
});
