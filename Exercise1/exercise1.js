const uptime = require('./uptime');
const memory = require('./memory');
const user = require('./user');
//Get current user
user();
//Get uptime from OS
uptime();
//Get total memory from OS
memory();

//Web Server with NodeJS
const http = require('http')
const { readFileSync } = require('fs')

const root = readFileSync('./index.html')


const server = http.createServer((req, res) => {
  const url = req.url
  console.log(url)
  //Establish JSON Data
  const jsondata = {count: 35, message: 'Welcome' }

  if (url === '/') {
    res.writeHead(200, { 'content-type': 'text/html' })
    res.write(root)
    res.end()
  }
  //GET JSON content in /data url
  else if(url == '/data') {
    const jsonContent = JSON.stringify(jsondata);
    res.end(jsonContent);
  }
  else {
    res.writeHead(404, { 'content-type': 'text/html' })
    res.write('<h1>Not found</h1>')
    res.end()
  }
})
server.listen(5001)