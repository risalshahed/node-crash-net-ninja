const mongoose = require('mongoose');

const Schema = mongoose.Schema;
// Schema defines the structure of our documents that we're gonna store inside a collection later; Schema is a thing that model wraps around
// mongoose object er ei Schema property is actually a constructor function

// ei (constructor function) Schema diye amra ekta new Schema create krbo
const blogSchema = new Schema({
  title: {
    // ei title hbe string type & it's required for blog documment
    type: String,
    required: true
  },
  snippet: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  }
}, {timestamps: true} )
// ei timestamps is an options object; blogs create/update er sathe timestamp er values

// remember, Schema defines the structure of our documents

// & model is the thing that sorrounds us & then provides us with an interface by which to communicate with a database collection for that document type

// ekhn amra model store krbo ekta new const a, typically model er names Capital letter diye suru hy

// const Blog with capital B

// const Blog = mongoose.model('Blog', ... ...) -> ei 1st argument ta hbe name of the model i.e. Blog & it's important!
// krn, eita ei name (Blog) er dke takabe, tarpor eita k PLURALIZE korbe, & then look for that collection inside that database whenever we use this model in the future to communicate with the database, so it's gonna therefore look for blogs (plural of Blog); ja already database a asey (blogs); so amdr r alada kore bole dte hbe NAA
// so, future a jokhn e amra Blog likhbo, amdr alada kore kisui bolte hbe na, ei model automatically blogs collection a search korbe

// now, the 2nd arg is the Schema we want to base this model on; so what types of object we're gonna store inside this collection; well it's gonna be the blogSchema we've just created
// Now, create the model & store it in "Blog" constant
const Blog = mongoose.model('Blog', blogSchema);

// Export the model
module.exports = Blog;