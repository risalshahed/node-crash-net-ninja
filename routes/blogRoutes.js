
const express = require('express');
// import blogController
const blogController = require('../controllers/blogController');

// create a new instance of a router object or a new express router
const router = express.Router();

// ****** app.js a, "app.use('/', blogRoutes)" <- eikhane already URL er '/' diye dewa hoice, so REMOVE all 'blogs' from the URL

// Sort Blog Routes by a field
router.get('/', blogController.blog_index);

// POST
router.post('/', blogController.blog_create_post);

// eita top to bottom sbkisu te fire kre, so 'blogs/:id' er sathe CLASH korbe, tai eita 'blogs/:id' suru howar agey dte hbe
router.get('/create', blogController.blog_create_get);

// get each blog in a separate page
router.get('/:id', blogController.blog_details);

// handle DELETE
router.delete('/:id', blogController.blog_delete);

// export the mini-app 'router'
module.exports = router;