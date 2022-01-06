const router = require('express').Router();
const todoController = require('../controllers/todoController');


router.post('/add/todo', todoController.postTodo);
router.get('/delete/todo/:_id', todoController.deleteTodo);

module.exports = router;