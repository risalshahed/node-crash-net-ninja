// return 'express' function & store it in a const express
const express = require('express');

// ----------- setup an express app -----------
// now invoke/call that express function, which creates an express app; store it in another constant 'app'
const app = express();

// listen for requests
app.listen('3000');   // create a locahost server & listen to port 3000

// Route Home Page
app.get('/', (req, res) => {
  // express a relative path na, rather absolute path dekhay; so amdr k 2nd parameter a root folder dte hbe, jeikhan theke amdr relative path show krbe
  res.sendFile('./views/index.html', { root: __dirname });
  // { root: __dirname } means project er root directory (Node JS Net Ninja) theke relative path display kro
})

// Route About Page
app.get('/about', (req, res) => {
  res.sendFile('./views/about.html', { root: __dirname });
})
