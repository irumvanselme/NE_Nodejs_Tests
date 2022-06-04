const { add } = require("../../utils/adder.js");

describe("Adder Function Tests", function () {
    it("should return 3 with 1 and 2", function () {
        expect(add(1, 2)).toBe(3);
    });

    it("Should return 0 when nothing given", function () {
        expect(add()).toBe(0);
    });

    it("should return 6 for 1,2 and 3", function () {
        expect(add(1, 2, 3)).toBe(6);
    });

    it("should return 10 for 5 and 5", function () {
        expect(add(5, 5)).toBe(10);
    });

    test("return 1 for 1", function () {
        expect(add(1)).toBe(1);
    });

    it("shoud fail", function () {
        expect(add("yello")).toBeNaN();
    });
});
