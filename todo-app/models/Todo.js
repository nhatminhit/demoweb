const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
    todo: {
        type: 'string',
        required: [true, 'todo is invalid'],
    },
})

module.exports = new mongoose.model('Todo', TodoSchema);