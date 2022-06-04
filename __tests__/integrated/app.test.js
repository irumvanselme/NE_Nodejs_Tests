const { serverURL } = require("../../src/utils/test-utils/server-url");

const { request } = require("undici");

describe("App is Running tests", function () {
    it("GET / should return Active", async function () {
        let res = await request(serverURL);

        expect(res.statusCode).toBe(200);
        expect(await res.body.json()).toMatchObject({ message: "ACTIVE" });
    });

    it("GET / should return working", async function () {
        let { statusCode, body } = await request(serverURL + "/status");

        expect(await body.json()).toMatchObject({ message: "RUNNING" });
        expect(statusCode).toBe(200);
    });

    it("GET /not-found should return 404", async function () {
        let { statusCode } = await request(serverURL + "/not-found");

        expect(statusCode).toBe(404);
    });
});
