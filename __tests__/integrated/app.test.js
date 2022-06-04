const supertest = require("supertest");
const { serverURL } = require("../../src/utils/test-utils/server-url");

const request = supertest.agent(serverURL);

describe("App is Running tests", function () {
    it("GET / should return Active", async function () {
        let res = await request.get("/");

        expect(res.status).toBe(200);
        expect(res.body.status).toBe("Running");
    });

    it("GET / should return working", async function () {
        let res = await request.get("/status");

        expect(res.status).toBe(200);
    });

    it("GET /not-found should return 404", async function () {
        let res = await request.get("/not-found");

        expect(res.status).toBe(404);
    });
});
