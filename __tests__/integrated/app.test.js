const supertest = require("supertest");
const { serverURL } = require("../../src/utils/test-utils/server-url");

var request = supertest.agent(serverURL);

console.log(serverURL);

describe("App is Running tests", function () {
    it("GET / should return Active", async function () {
        let res = await request.get("/");

        expect(res.status).toBe(200);
        expect(res.body.status).toBe("Running");
    });
});
