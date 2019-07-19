import { getAverage } from '../grades-utils';

describe("test getAverage function", () => {
    it("should get average for all positive input numbers", () => {
        const args = [2, 5, 8, 1];
        expect(getAverage(args)).toBe(4)
    });

    it("should assume non-numberable elements as 0 in getAverage", () => {
        const args = ["rf", 21, "3", 0, "26kg"];
        expect(getAverage(args)).toBe(10)
    });

    it("should return null if input is not an array", () => {
        const args = 43;
        expect(getAverage(args)).toBe(null);
    })
});

describe("tests isInRange function", () => {

});
