const { app } = require("../../app");

const createTestServer = () => {
    let server;

    beforeAll(() => {
        server = app.listen(8003);
    });

    afterAll(() => {
        server.close();
    });

    return `http://localhost:8003`;
};

module.exports = {
    serverURL: createTestServer(),
};
