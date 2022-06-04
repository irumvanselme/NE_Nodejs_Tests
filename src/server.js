const dotenv = require("dotenv");
const { app } = require("./app");
const { logger } = require("./utils/logger");

const { connectToDb } = require("./config/db-connection");

connectToDb();

dotenv.config();

const port = process.env.PORT || 8000;

app.listen(port, () => {
    logger(`running on http://localhost:${port}`);
});
