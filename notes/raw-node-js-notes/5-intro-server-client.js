// all computers have a unique IP address
// IP adress mne rakha kothin tai proti IP er jnno domain name ase, amra domain name likhle server oitar IP address khuje amdr k webpage show kre
// ei j amra browser a kisu likhe enter mari, ba kono link a click kri, amra ultimately server a GET request pathassi

const http = require('http');

const server = http.createServer( (req, res) => {
  console.log(req.url, req.method); // backend a hossse, so browser er console a dekha jabe na, amra cmd or vs code er output tab a dekhte parbo
  // set what type of content server'll response (e.g. 'text/plain' -> plain text)
  res.setHeader('Content-type', 'text/html');
  res.write('<h1>Hello Ninjas</h1>');
  res.write('<head><link rel=\'stylesheet\' href="#"></head>');
  res.end();
})
// request change kore file sudhu save krlei hbe na, file ta notun kore run krte hbe (e.g. "Alt + Ctrl + N" in VS Code with Code Runner Extension)

server.listen(3000, 'localhost', () => {
  console.log('listening for request on port 3000');
})

// IP of localhost is 127.0.0.1