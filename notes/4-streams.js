// see stream-buffer-concept.js at first
const fileSystem = require('fs');

// create a read stream
const readStream = fileSystem.createReadStream('./blogs3.txt', { encoding: 'utf8' });
// create a write stream
const writeStream = fileSystem.createWriteStream('./blogs4.txt');

// event listener (1st is the full data, 2nd is a chunk of the data in arrow function)
/* readStream.on('data', (chunk) => {
  console.log('********************** NEW CHUNK **********************');
  // console.log(chunk.toString());
  // jodi toString() na diye dekhte chai, createReadStream a pass another parameter
  console.log(chunk);
  // write stream codes (readStream er data read kore write it in a new file)
  writeStream.write('\nNEW CHUNK\n');
  writeStream.write(chunk);
}) */
// Alternative of all the above lines!
readStream.pipe(writeStream);