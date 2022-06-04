require("./config/db-connection");

const express = require("express");
const { todosRoutes } = require("./routes/todos");
const { responseFormatter } = require("./utils/formatter");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    return res.send(responseFormatter("ACTIVE"));
});

app.get("/status", (req, res) => {
    return res.send(responseFormatter("RUNNING"));
});

app.use("/api/todos", todosRoutes);

module.exports = {
    app,
};
