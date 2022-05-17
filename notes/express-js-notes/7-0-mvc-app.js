// return 'express' function & store it in a const express
const express = require('express');
// third party middleware
const morgan = require('morgan');
// mongoose
const mongoose = require('mongoose');
const { render } = require('ejs');
// import blogRoutes
const blogRoutes = require('./routes/blogRoutes');

// create express app
const app = express();

// Schema -> Logical Representation

// connect to mongodb
const dbURI = 'mongodb+srv://netninja:test1234@cluster0.0qtxh.mongodb.net/node-tuts?retryWrites=true&w=majority';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  // dbConnect howar porei server request listen krbe
  .then((result) => app.listen('3000'))
  .catch((err) => console.log(err))

// register ejs as view engine
app.set('view engine', 'ejs'); 
// ei function ta express app create korar IMMEDIATE POREI dte hbe


// --------------- Middleware & Static Files ---------------
// public is a folder name
app.use(express.static('public'));
// middleware to pass data for POST request
app.use(express.urlencoded({ extended: true }));  //  it's for accepting form data
// ei middleware form submit er shob data niye app.post er request object a object hishebe data gulo k pass kre
// morgan middleware
app.use(morgan('dev'));


// Route Home Page with render()
app.get('/', (req, res) => {
  // redirect home page to blog page
  res.redirect('/blogs');
})

// Route About Page with render()
app.get('/about', (req, res) => {
  res.render('about', {title: 'About'});
})

// use blogRoutes here
// app.use(blogRoutes);
app.use('/blogs', blogRoutes);  // fire only if URL has '/blogs'

// Route 404 Page with render()
app.use( (req, res) => {
  res.status(404).render('404', {title: '404'});
})

// V.V.I. jehetu uporer shob match check kre, so USE function ta MOST_BOTTOM i.e. SOBAR_SHESHE thakte hbe
