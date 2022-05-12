
const fileSystem = require('fs');

// write files (overwrite the texts of the file )
fileSystem.writeFile('../../JavaScript/Node JS W3Schools/blogs.txt', 'Pack my box with five dozen liquor jugs', () => {
  console.log('File written');
});

// write a file which doesn't exist! (it actually creates one)
fileSystem.writeFile('../../JavaScript/Node JS W3Schools/blogs2.txt', 'The five boxing wizards jump quickly', () => {
  console.log('File written');
});