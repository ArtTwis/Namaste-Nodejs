const express = require('express');

const app = express();

app.get('/users', (req, res) => {
  return res.status(200).send({
    status: 'success',
    message: "User list retrieved successfully",
    data: [
      { id: 1, name: 'John Doe' },
      { id: 2, name: 'Jane Doe' },
    ],
  });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});