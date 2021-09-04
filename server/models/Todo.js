const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
  },
});

module.exports = new mongoose.model('TodoModel', TodoSchema, 'todos');
