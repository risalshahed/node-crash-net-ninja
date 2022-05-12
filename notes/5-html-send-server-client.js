
const http = require('http');
const fs = require('fs');

const server = http.createServer( (req, res) => {
  console.log(req.url, req.method); // backend a hossse, so browser er console a dekha jabe na, amra cmd or vs code er output tab a dekhte parbo
  
  // send an html file to the browser
  fs.readFile('./htmls/demo1.html', (err, data) => {
    if(err) {
      console.log(err);
      res.end();
    } else {  // no error -> send the data as a response to the browser
      res.write(data);
      res.end();
    }
  })
})
// request change kore file sudhu save krlei hbe na, file ta notun kore run krte hbe (e.g. "Alt + Ctrl + N" in VS Code with Code Runner Extension)

server.listen(3000, 'localhost', () => {
  console.log('listening for request on port 3000');
})

// IP of localhost is 127.0.0.1