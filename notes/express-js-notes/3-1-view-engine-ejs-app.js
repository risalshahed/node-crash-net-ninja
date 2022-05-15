// return 'express' function & store it in a const express
const express = require('express');

// create express app
const app = express();

// register ejs as view engine
// app.set lets us configure some application settings, one of those is view engine
app.set('view engine', 'ejs');  // ejs view engine'll be used to create templates
// ei function ta express app create korar IMMEDIATE POREI dte hbe

app.listen('3000');   // create a locahost server & listen to port 3000

// Route Home Page with render()
app.get('/', (req, res) => {
  res.render('index');
  // ei render function ejs view engine use kore server a index.ejs file render krbe, N.B. ei render function automatically views folder er vitore dhukbe, so "./views/" dewar dorkar naai
})

// **** Route suru hoy "/" diye; kono "." boshano jabe NAA, only "/"

// Route About Page with render()
app.get('/about', (req, res) => {
  res.render('about');
})

// render function a, '' er virote ONLY_FILE_NAME without any EXTENSION (.ejs)

app.get('/blogs/create', (req, res) => {
  res.render('create');
})

// Route 404 Page with render()
app.use( (req, res) => {
  res.status(404).render('404');
})

// tar mane, ei use function ager shob request check krbe! jodi kono match paay, tahole seita fire kore execute krbe! for example, jodi amra '/' dei, se home page display kore dbe; jodi amra '/adbout-us' dei, se 'about' a redirect krbe! that is, jokhn e MATCH pabe, execute kore dbe & STOP hoye jabe.. BUT jodi kono match na paay, taile nijer function er je response (404.html file); seita execute krbe! THAT'S the use of USE method or USE function

// V.V.I. jehetu uporer shob match check kre, so USE function ta MOST_BOTTOM i.e. SOBAR_SHESHE thakte hbe

