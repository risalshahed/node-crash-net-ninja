// return 'express' function & store it in a const express
const express = require('express');

// create express app
const app = express();

// register ejs as view engine
app.set('view engine', 'ejs'); 
// ei function ta express app create korar IMMEDIATE POREI dte hbe

app.listen('3000');

// Route Home Page with render()
app.get('/', (req, res) => {
  // dummy blogs
  const blogs = [
    {title: 'Lorem, ipsum', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    {title: 'Quae, impedit', snippet: 'Laudantium quidem tenetur ipsam veniam nulla'},
    {title: 'Quibusdam, animi', snippet: 'Nisi cum tempore et magni consequuntur'},
  ];
  // res.render('index');
  // pass a title as object
  res.render('index', {title: 'Home', blogs: blogs});
  // shorthand of blogs: blogs
  // res.render('index', {title: 'Home', blogs});
})

// Route About Page with render()
app.get('/about', (req, res) => {
  res.render('about', {title: 'About'});
})

app.get('/blogs/create', (req, res) => {
  res.render('create', {title: 'New Blog'});
})

// Route 404 Page with render()
app.use( (req, res) => {
  res.status(404).render('404', {title: '404'});
})

// V.V.I. jehetu uporer shob match check kre, so USE function ta MOST_BOTTOM i.e. SOBAR_SHESHE thakte hbe
