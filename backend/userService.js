// userService.js

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const port = 3003;

app.use(bodyParser.json());

// MongoDB connection setup
const uri = 'mongodb+srv://admin:SeFMpKGL9P3RhAQX@cluster0.sjck0va.mongodb.net/test?retryWrites=true&w=majority';
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define schema and model for user management
const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  // Add more fields as needed
});

const User = mongoose.model('User', userSchema);

// Routes for user management
app.get('/users/:id', async (req, res) => {
  const userId = req.params.id;
  try {
    const user = await User.findById(userId);
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.put('/users/:id', async (req, res) => {
  const userId = req.params.id;
  const newData = req.body;
  try {
    const updatedUser = await User.findByIdAndUpdate(userId, newData, { new: true });
    if (updatedUser) {
      res.json(updatedUser);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.delete('/users/:id', async (req, res) => {
  const userId = req.params.id;
  try {
    const deletedUser = await User.findByIdAndDelete(userId);
    if (deletedUser) {
      res.json({ message: 'User deleted successfully' });
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log(`User management microservice listening at http://localhost:${port}`);
});
