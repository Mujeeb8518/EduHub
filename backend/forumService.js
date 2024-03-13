// forumService.js

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const port = 3002;

app.use(bodyParser.json());

// MongoDB connection setup
const uri = 'mongodb+srv://admin:SeFMpKGL9P3RhAQX@cluster0.sjck0va.mongodb.net/test?retryWrites=true&w=majority';
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define schema and model for forum posts
const postSchema = new mongoose.Schema({
  title: String,
  content: String,
});

const Post = mongoose.model('Post', postSchema);

// Routes for forum posts
app.get('/posts', async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.post('/posts', async (req, res) => {
  try {
    const { title, content } = req.body;
    const newPost = new Post({ title, content });
    await newPost.save();
    res.status(201).json({ message: 'Post created successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log(`Forum microservice listening at http://localhost:${port}`);
});
