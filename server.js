const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

// Home route
app.get('/', (req, res) => {
  res.render('index');
});

// Handle form submission
app.post('/submit', (req, res) => {
  const { username, email } = req.body;
  res.send(`Form submitted! Name: ${username}, Email: ${email}`);
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
