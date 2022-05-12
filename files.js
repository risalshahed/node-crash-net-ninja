
// directories
const fileSystem = require('fs');

// delete a file if it exists

if( fileSystem.existsSync('./delete-it.txt') ) {
  // delete a file
  fileSystem.unlink('./delete-it.txt', (err) => {
    if(err) {
      console.log(err);
    }
    console.log('file deleted');
  })
} else {
  console.log('no such file exists');
}