const { logger } = require("../utils/logger");

require("mongoose")
    .connect("mongodb://localhost:27017/todoapp", {
        useNewUrlParser: true,
    })
    .then(() => {
        // logger("Connected to database");
    })
    .catch((e) => {
        // logger("Failed to connect to the database" + e.message);
    });

require("../models/todo");
