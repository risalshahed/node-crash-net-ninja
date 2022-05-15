
const fileSystem = require('fs');

// read files
fileSystem.readFile('../../JavaScript/Node JS W3Schools/blogs.txt', (err, data) => {
  if(err) {
    console.log(err);
  }
  // console.log(data);  // kisu buffer pathabe amdr k
  // buffer is basically a package of data sent to us when we read file

  // to return string
  console.log(data.toString());
});

// function er bairer eita last a ashar ktha, kin2 readFile asynchronous howay, ektu time nibe! abr amra jani, node JS hoilo non-blocking, it doesn't wait! tai function er bairer ei line agei execute hye jabe; file read er jnno wait krbe naa
console.log('Last Line First!');