const mongoose = require("mongoose");

module.exports = {
    connectToDb() {
        mongoose
            .connect("mongodb://localhost:27017/todoapp", {
                useNewUrlParser: true,
            })
            .then(async (res) => {
                // logger("Connected to database");
            })
            .catch((e) => {
                // logger("Failed to connect to the database" + e.message);
            });

        require("../models/todo");
    },

    closeConnection() {
        mongoose.connection.close();
    },
};
