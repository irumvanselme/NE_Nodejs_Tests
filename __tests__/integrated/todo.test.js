const { serverURL } = require("../../src/utils/test-utils/server-url");

const { request } = require("undici");

const sinon = require("sinon");

const { Todo } = require("../../src/models/todo");

describe("Todos Tests", function () {
    afterEach(function () {
        sinon.restore();
    });

    describe("Get all", () => {
        it("should return a status of 200", async function () {
            let { statusCode, body } = await request(serverURL + "/api/todos");

            let res = await body.json();

            for (const todo of res) {
                expect(todo).toHaveProperty("_id");
                expect(todo).toHaveProperty("createdAt");
                expect(todo).toHaveProperty("title");
                expect(todo).toHaveProperty("description");
                expect(todo).toHaveProperty("done");
            }

            expect(statusCode).toBe(200);
        });
    });

    describe("Get by id", function () {
        it("should return a status of 200", async function () {
            const stubValue = {
                _id: "3443",
                title: "New todo",
                description: "New todo",
                createdAt: Date.now().toString(),
                done: true,
            };

            const stub = sinon.stub(Todo, "findById").returns(stubValue);

            stub.calledOnce = true;

            let { statusCode, body } = await request(
                serverURL + "/api/todos/629b3c85240d6b4f95d09e3b"
            );

            let todo = await body.json();

            expect(todo).toHaveProperty("_id");
            expect(todo).toHaveProperty("createdAt");
            expect(todo).toHaveProperty("title");
            expect(todo).toHaveProperty("description");
            expect(todo).toHaveProperty("done");

            expect(statusCode).toBe(200);
        });

        it("should return a status of 404 for not found", async function () {
            const stub = sinon.stub(Todo, "findById").returns(null);
            stub.calledOnce = true;

            let { statusCode } = await request(
                serverURL + "/api/todos/629b3c85240d6b4f95d09e3e"
            );

            expect(statusCode).toBe(404);
        });
    });
});
