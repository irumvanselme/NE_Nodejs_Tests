const express = require("express");

const app = express();

app.get("/", (req, res) => {
    return res.send({
        status: "Running",
    });
});

app.get("/status", (req, res) => {
    return res.send("RUNNING");
});

module.exports = {
    app,
};
