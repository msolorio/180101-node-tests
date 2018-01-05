const express = require('express');
const { users } = require('../usersData');

const app = express();

app.get('/', (req, res) => {
  res.status(200)
    .json({
      message: 'exquisit response',
      type: 'header',
      style: 'bold'
    });
});

app.get('/users', (req, res) => {
  res.status(200)
    .json(users);
});

app.listen(3000, () => {
  console.log('your testing app is listening on port 3000')
});

module.exports = { app };
