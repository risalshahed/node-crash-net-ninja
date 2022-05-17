
// import model 'Blog'
const Blog = require('../models/blog');

// function for index of blog i.e. '/blogs' page
const blog_index = (req, res) => {
  Blog.find().sort({ createdAt: -1 })   // -1 -> descending order
    .then((result) => {
      // render index view (index.ejs file inside view folder)
      res.render('index', { title: 'All Blogs', blogs: result });
    })
    .catch((err) => {
      console.log(err);
    })
}

// function for details of blog
const blog_details = (req, res) => {
  // req er params property te pawa jabe ei id
  const id = req.params.id;
  // console.log(id);
  Blog.findById(id)
    .then((result) => {
      // render('a view', { 'data we wanna get', 'title for the single blog pages' })
      res.render('details', { blog: result, title: 'Blog Details' });
    })
    .catch((err) => {
      // id te vul URL dle, 404 error display krbo
      res.status(404).render('404', { title: 'Blog not found' });
    })
}

// function for get blog
const blog_create_get = (req, res) => {
  res.render('create', {title: 'New Blog'});
}

// function for post blog
const blog_create_post = (req, res) => {
  const blog = new Blog(req.body);

  blog.save()
    .then((result) => {
      res.redirect('/');     // redirect to blogs page
    })
    .catch((err) => {
      console.log(err);
    })
}

// function for delete blog
const blog_delete = (req, res) => {
  const id = req.params.id;

  Blog.findByIdAndDelete(id)
  .then(result => {
    res.json({ redirect: '/' });
  })
  .catch(err => {
    console.log(err);
  })
}


// Export the functions
module.exports = {
  blog_index,
  blog_details,
  blog_create_get,
  blog_create_post,
  blog_delete
}