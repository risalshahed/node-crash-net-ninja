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

// Sort Blog Routes by a field
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

// POST
app.post('/blogs', (req, res) => {
  // ekhn, '.blogs/create' page theke, new blog save krte chaile, at first we need access to all that data that comes along for the ride (from the form of '.blogs/create' page; whose code is in create.ejs file) in this post request when we click on Submit on the form of '.blogs/create' page
  // to get this data (title, snippet, body from create.ejs file), we need to use a bit of middleware (upore) which is gonna pass the data that we send into a workable format that we can use & it's gonna attach it to this request object

  // save a new blog
  // console.log(req.body);
  const blog = new Blog(req.body);

  blog.save()
    .then((result) => {
      res.redirect('/blogs');     // redirect to blogs page
    })
    .catch((err) => {
      console.log(err);
    })
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
