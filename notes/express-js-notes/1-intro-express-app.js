
/* ----------------------------------------------

  Very First steps to start in express JS!
  
  1. npm init
  2. npm i express
  3. create app.js file inside root directory of project
  4. require express
  5. create app variable & setup an express app
  6. listen to the port (here 3000)

---------------------------------------------- */


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

