// return 'express' function & store it in a const express
const express = require('express');

// ----------- setup an express app -----------
// now invoke/call that express function, which creates an express app; store it in another constant 'app'
const app = express();

// listen for requests
app.listen('3000');   // create a locahost server & listen to port 3000

// Route Home Page
app.get('/', (req, res) => {
  res.send('<h1>Home Page</h1>');
})

// Route About Page
app.get('/about', (req, res) => {
  res.send('<h1>About Page</h1>');
})
