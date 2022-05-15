
const http = require('http');
const fs = require('fs');

const server = http.createServer( (req, res) => {
  console.log(req.url, req.method);

  // set header content type
  res.setHeader('Content-type', 'text/html');

  // go inside 'htmls' directory
  let path = './htmls/';
  switch(req.url) {
    case '/':
      path += 'index.html';
      // add status code
      res.statusCode = 200;
      break;
    // A Redirect Case
    case '/index':
      res.statusCode = 301;
      // redirect "/index" to "/" i.e. HomePage
      res.setHeader('Location', '/'); // Location must be with Capital "L"
      break;
    case '/about':
      path += 'about.html';
      // add status code
      res.statusCode = 200;
      break;
    // Another Redirect Case
    case '/about-me':
      res.statusCode = 301;
      // redirect about-me to about
      res.setHeader('Location', '/about');
      break;
    default:
      path += '404.html';
      // add status code
      res.statusCode = 404;
      break;
  }
  
  // send an html file to the browser
  fs.readFile(path, (err, data) => {
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