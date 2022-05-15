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

// Redirect
app.get('/about-us', (req, res) => {
  res.redirect('./about');
  // this redirect function of express automatically sets the status code
})

// use Function
// use method or use function fire every single request coming in.

app.use( (req, res) => {
  // res.sendFile('./views/404.html', { root: __dirname });
  // 404 error ta auto set hyna, amdr manually SET kra lage
  res.status(404).sendFile('./views/404.html', { root: __dirname });
})

// tar mane, ei use function ager shob request check krbe! jodi kono match paay, tahole seita fire kore execute krbe! for example, jodi amra '/' dei, se home page display kore dbe; jodi amra '/adbout-us' dei, se 'about' a redirect krbe! that is, jokhn e MATCH pabe, execute kore dbe & STOP hoye jabe.. BUT jodi kono match na paay, taile nijer function er je response (404.html file); seita execute krbe! THAT'S the use of USE method or USE function

// V.V.I. jehetu uporer shob match check kre, so USE function ta MOST_BOTTOM i.e. SOBAR_SHESHE thakte hbe

