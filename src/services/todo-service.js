let Todo = require("mongoose").model("Todo");

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
        return res.send(await Todo.findById(req.params.id));
    }

    async delete(req, res) {
        return res.send(await Todo.findByIdAndDelete(req.params.id));
    }
}

module.exports = {
    service: new TodoService(),
};
