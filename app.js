const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const auth = require('./routes/auth');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb+srv://pravya2022:PI6hLNs2qhGjdk3U@cluster0.jokxx.mongodb.net/auth', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use('/auth', auth);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});