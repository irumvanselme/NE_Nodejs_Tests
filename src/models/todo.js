const mongoose = require("mongoose");

const Todoschema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    done: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
});

module.exports = {
    Todo: new mongoose.model("Todo", Todoschema),
};
