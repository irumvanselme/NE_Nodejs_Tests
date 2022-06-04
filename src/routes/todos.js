const { service } = require("../services/todo-service");

const router = require("express").Router();

router.get("/", service.getAllTodos);
router.post("/", service.create);
router.delete("/:id", service.delete);
router.get("/:id", service.findById);

module.exports = {
    todosRoutes: router,
};
