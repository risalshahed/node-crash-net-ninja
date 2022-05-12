
// directories
const fileSystem = require('fs');
// create a directory (with check whether the directory already exists or not)
if( !fileSystem.existsSync('./assets') ) {
  fileSystem.mkdir('./assets', (err) => {
    if(err) {
      console.log(err);
    }
    console.log('folder created');
  })
} else {
  // already folder ta thakle, say amra seita remove krbo!
  fileSystem.rmdir('./assets', (err) => {
    if(err) {
      console.log(err);
    }
    console.log('folder deleted');
  })
}