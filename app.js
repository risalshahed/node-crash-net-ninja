// return 'express' function & store it in a const express
const express = require('express');
// third party middleware
const morgan = require('morgan');
// mongoose
const mongoose = require('mongoose');

// create express app
const app = express();

// Schema -> Logical Representation

// connect to mongodb
const dbURI = 'mongodb+srv://netninja:test1234@cluster0.0qtxh.mongodb.net/node-tuts?retryWrites=true&w=majority';
// connect to database with mongoose
// 2nd arg is options object to prevent deprecation
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  // dbConnect howar porei server request listen krbe
  .then((result) => app.listen('3000'))
  .catch((err) => console.log(err))


// register ejs as view engine
app.set('view engine', 'ejs'); 
// ei function ta express app create korar IMMEDIATE POREI dte hbe

// server, request tokhn e listen krbe, jokhn db connected hbe!
// app.listen('3000');

// public is a folder name
app.use(express.static('public'));
// ****** ekhn, project a "public" folder create kore tar vitore kono file rakhle "shei files will be available as a static file for front end"

// morgan middleware
// app.use(morgan('dev'));
app.use(morgan('tiny'));

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
});

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
