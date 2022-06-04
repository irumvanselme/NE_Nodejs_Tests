const express = require("express");
const { responseFormatter } = require("./utils/formatter");

const app = express();

app.get("/", (req, res) => {
    return res.send(responseFormatter("ACTIVE"));
});

app.get("/status", (req, res) => {
    return res.send(responseFormatter("RUNNING"));
});

module.exports = {
    app,
};
