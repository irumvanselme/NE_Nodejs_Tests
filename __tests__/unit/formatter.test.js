const { responseFormatter } = require("../../src/utils/formatter");

describe("Formatter function Tests", () => {
    it("Shoud work for ok to go", () => {
        expect(responseFormatter("ok_to_go")).toMatchObject({
            message: "ok_to_go",
        });
    });
});
