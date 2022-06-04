const { app } = require("../../app");
const { closeConnection, connectToDb } = require("../../config/db-connection");

const createTestServer = () => {
    let server;

    beforeAll(() => {
        connectToDb();

        server = app.listen(8003);
    });

    afterAll(async () => {
        closeConnection();

        await server.close();
    });

    return `http://localhost:8003`;
};

module.exports = {
    serverURL: createTestServer(),
};
