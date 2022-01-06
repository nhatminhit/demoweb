const Todo = require('../models/Todo');
const asyncHandle = require('../middlewares/asyncHandle');

module.exports = {
    postTodo: asyncHandle(async(req, res, next) => {
        const { todo } = req.body;
        console.log(req.body);
        const newTodo = await Todo.create({ todo });
        console.log(newTodo);
        res.redirect('/');
    }),
    deleteTodo: asyncHandle(async(req, res, next) => {
        const { _id } = req.params;
        const todo = await Todo.findOneAndDelete({ _id });
        console.log("delete todo successfully!");
        res.redirect('/');
    })
}