const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const apiRouter = require('./routes/api');
require('dotenv').config();

app.use(cors({ origin: '*' }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1/', apiRouter);

const port = process.env.PORT || 8080;

mongoose
  .connect(process.env.TODO_DB)
  .then(() => {
    console.log('Connected');
    app.listen(port, () => {
      console.log(`Server: ${port}`);
    });
  })
  .catch((err) => console.error(err.stack));
