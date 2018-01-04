const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res
    .status(200)
    .send('exquisit response');
});

app.listen(3000, () => console.log('your testing app is listening on port 3000'));

module.exports = { app };
