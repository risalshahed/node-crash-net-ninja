
const express = require('express');
// import model 'Blog'
const Blog = require('../models/blog');

// create a new instance of a router object or a new express router
const router = express.Router();

// ****** app.js a, "app.use('/', blogRoutes)" <- eikhane already URL er '/' diye dewa hoice, so REMOVE all 'blogs' from the URL

// Sort Blog Routes by a field
router.get('/', (req, res) => {
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
router.post('/', (req, res) => {
  // ekhn, '.blogs/create' page theke, new blog save krte chaile, at first we need access to all that data that comes along for the ride (from the form of '.blogs/create' page; whose code is in create.ejs file) in this post request when we click on Submit on the form of '.blogs/create' page
  // to get this data (title, snippet, body from create.ejs file), we need to use a bit of middleware (upore) which is gonna pass the data that we send into a workable format that we can use & it's gonna attach it to this request object

  // save a new blog
  // console.log(req.body);
  const blog = new Blog(req.body);

  blog.save()
    .then((result) => {
      res.redirect('/');     // redirect to blogs page
    })
    .catch((err) => {
      console.log(err);
    })
})

// eita top to bottom sbkisu te fire kre, so 'blogs/:id' er sathe CLASH korbe, tai eita 'blogs/:id' suru howar agey dte hbe
router.get('/create', (req, res) => {
  res.render('create', {title: 'New Blog'});
})

// get each blog in a separate page
router.get('/:id', (req, res) => {
  // req er params property te pawa jabe ei id
  const id = req.params.id;
  // console.log(id);
  Blog.findById(id)
    .then((result) => {
      // render('a view', { 'data we wanna get', 'title for the single blog pages' })
      res.render('details', { blog: result, title: 'Blog Details' });
    })
    .catch((err) => {
      console.log(err);
    })
})

// handle DELETE
router.delete('/:id', (req, res) => {
  const id = req.params.id;

  Blog.findByIdAndDelete(id)
  // jokhn front-end theke AJAX request pathano hbe, tokhn amra node theke response redirect korte parbo NAA! We've to send JSON or text data back to the browser & that JSON data (in the front-end; here in script tag of details.ejs file) have redirect property & that property is gonna be a URL where we wanna redirect
  .then(result => {
    // id dhore DELETE korar pore, '/' page a redirect hbe & oi "deleted" blog baad a bakigulo show krbe
    res.json({ redirect: '/' }); // ei 'redirect' property front-end a use krbo
  })
  .catch(err => {
    console.log(err);
  })
})

// export the mini-app 'router'
module.exports = router;