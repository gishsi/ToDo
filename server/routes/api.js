const express = require('express');
const router = express.Router();
const {
  getAllRecords,
  createTodo,
  getRecord,
  updateTodo,
  deleteTodo,
} = require('../controllers/apiController');

router.get('/', getAllRecords);
router.post('/create', createTodo);
router.post('/getRecord', getRecord);
router.post('/update/:id', updateTodo);
router.delete('/delete/:id', deleteTodo);

module.exports = router;
