const { Todo } = require("../models/todo");
const { responseFormatter } = require("../utils/formatter");

class TodoService {
    async getAllTodos(req, res) {
        let todos = await Todo.find();

        return res.send(todos);
    }

    async create(req, res) {
        let body = req.body;
        body.done = false;

        return res.send(await new Todo(body).save());
    }

    async findById(req, res) {
        let todo = await Todo.findById(req.params.id);

        if (!todo)
            return res
                .status(404)
                .send(
                    responseFormatter(
                        "Todo with id [" + req.params.id + "] Not found"
                    )
                );

        return res.send(todo);
    }

    async delete(req, res) {
        return res.send(await Todo.findByIdAndDelete(req.params.id));
    }
}

module.exports = {
    service: new TodoService(),
};
