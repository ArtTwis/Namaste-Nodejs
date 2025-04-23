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
})

app.post('/user', (req, res) => {
  return res.status(201).send({
    status: 'success',
    message: "User created successfully",
    data: {
      id: 3,
      name: 'New User',
    },
  });
});

app.patch('/user', (req, res) => {
  return res.status(201).send({
    status: 'success',
    message: "User detail updated successfully",
    data: {
      name: 'New User',
    },
  });
});

app.put('/user', (req, res) => {
  return res.status(201).send({
    status: 'success',
    message: "User details updated successfully",
    data: {
      id: 3,
      name: 'New User',
    },
  });
});

app.delete('/user', (req, res) => {
  return res.status(201).send({
    status: 'success',
    message: "User deleted successfully",
    data: {
      id: 3,
      name: 'New User',
    },
  });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});