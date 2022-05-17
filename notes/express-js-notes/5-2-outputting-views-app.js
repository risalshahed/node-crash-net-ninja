// return 'express' function & store it in a const express
const express = require('express');
// third party middleware
const morgan = require('morgan');
// mongoose
const mongoose = require('mongoose');
// import model 'Blog'
const Blog = require('./models/blog');


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

// public is a folder name
app.use(express.static('public'));

// morgan middleware
app.use(morgan('dev'));

// Route Home Page with render()
app.get('/', (req, res) => {
  // redirect home page to blog page
  res.redirect('/blogs');
})

// Blog Routes
/* app.get('/blogs', (req, res) => {
  Blog.find()
    .then((result) => {
      // render index view (index.ejs file inside view folder)
      res.render('index', { title: 'All Blogs', blogs: result });
    })
    .catch((err) => {
      console.log(err);
    })
}); */

// Sort by a field
app.get('/blogs', (req, res) => {
  Blog.find().sort({ createdAt: -1 })   // -1 -> descending order
    .then((result) => {
      // render index view (index.ejs file inside view folder)
      res.render('index', { title: 'All Blogs', blogs: result });
    })
    .catch((err) => {
      console.log(err);
    })
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
