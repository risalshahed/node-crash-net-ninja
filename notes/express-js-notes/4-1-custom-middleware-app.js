// return 'express' function & store it in a const express
const express = require('express');

// create express app
const app = express();

// register ejs as view engine
app.set('view engine', 'ejs'); 
// ei function ta express app create korar IMMEDIATE POREI dte hbe

app.listen('3000');

/* app.use((req, res) => {
  console.log('new request made');
  console.log('host', req.hostname);
  console.log('path', req.path);
  console.log('method', req.method);
});
 */
// ei middleware run korle browser hang kre, samne agay na, cz eita janei na pore kisu ase ki na! jehetu use functionn sobar seshe thake & uporer codes check kre; so amr e bole dte hbe nicher dke or samne agaite using next()..

app.use((req, res, next) => {
  console.log('new request made');
  console.log('host', req.hostname);
  console.log('path', req.path);
  console.log('method', req.method);
  // we're tellig express to move on here as we're not sending any response to the browser so express can move on from here
  next();
});

/* // another middleware to test if everything is okay
app.use((req, res, next) => {
  console.log('in the next middleware');
  next();
  // ei next() dewar sathe sathe 
}) */

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

// another middleware after home page
app.use((req, res, next) => {
  console.log('in the next middleware won\'t be got in home page cz it\'s been put after the render of home page!');
  next();
  // ei next() dewar sathe sathe 
});

// Route About Page with render()
app.get('/about', (req, res) => {
  res.render('about', {title: 'About'});
})

// another middleware after about & home page
app.use((req, res, next) => {
  console.log('in the next middleware won\'t be got in about & home page cz it\'s been put after the render of about & home page!');
  next();
  // ei next() dewar sathe sathe 
});

app.get('/blogs/create', (req, res) => {
  res.render('create', {title: 'New Blog'});
})

// Route 404 Page with render()
app.use( (req, res) => {
  res.status(404).render('404', {title: '404'});
})

// V.V.I. jehetu uporer shob match check kre, so USE function ta MOST_BOTTOM i.e. SOBAR_SHESHE thakte hbe
