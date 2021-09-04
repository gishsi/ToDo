const TodoModel = require('../models/Todo');

module.exports = {
  getAllRecords: async (req, res) => {
    const todos = await TodoModel.find();
    res.send(todos);
  },
  getRecord: async (req, res) => {
    const { title } = req.body;
    const todo = await TodoModel.find({ title });

    res.send(todo);
  },
  createTodo: async (req, res) => {
    const { title, content } = req.body;
    const newTodo = new TodoModel({ title, content });
    await newTodo.save();
    res.send(newTodo);
  },
  updateTodo: async (req, res) => {
    const { id } = req.params;
    const { title } = req.body;
    try {
      res.send(`Updating ${id}`);
      await TodoModel.findByIdAndUpdate(id, { title });
    } catch (error) {
      console.error(error.stack);
    }
  },
  deleteTodo: async (req, res) => {
    const { id } = req.params;
    try {
      res.send(`Deleting ${id}`);
      await TodoModel.findByIdAndRemove(id);
    } catch (error) {
      console.error(error.stack);
    }
  },
};
