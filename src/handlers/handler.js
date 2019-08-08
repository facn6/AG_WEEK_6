const { readFile } = require("fs");
const path = require("path");
const queryString=require('querystring');
// const getData = require('../queries/getData.js');
 const postData = require('../queries/postData.js');

const serverError = (err, response) => {
  response.writeHead(500, "Content-Type:text/html");
  response.end("<h1>Sorry, there was a problem loading the homepage</h1>");
  console.log(err);
};

const homeHandler = response => {
  const filepath = path.join(__dirname, "..", "..", "Public", "index.html");
  readFile(filepath, (err, file) => {
    if (err) return serverError(err, response);
    response.writeHead(200, { "Content-Type": "text/html" });
    response.end(file);
  });
};

const publicHandler = (url, response) => {
  const filepath = path.join(__dirname, "..", "..", "Public", url);
  readFile(filepath, (err, file) => {
    if (err) return serverError(err, response);
    const [, extension] = url.split(".");
    const extensionType = {
      html: "text/html",
      css: "text/css",
      js: "application/javascript",
      ico: "image/x-icon"
    };
    response.writeHead(200, { "content-type": extensionType[extension] });
    response.end(file);
  });
};

const postsHandler =(request,response) => {
let data = '';
    request.on('data', function(chunk) {
      data += chunk;
    });
    request.on('end', () => {
      const name = queryString.parse(data).name;

   postData.postDataposts(name, (err, res) => {
        if (err) {
          response.writeHead(500, 'Content-Type: text/html');
          response.end('<h1>Sorry, there was a problem adding that user</h1>');
          console.log(err);
        } else {
          response.writeHead(200, { 'Content-Type': 'text/html' });
          fs.readFile(__dirname + '/../../Public/index.html', function(
            error,
            file
          ) {
            if (error) {
              console.log(error);
              return;
            } else {
              response.end(file);
            }
          });
        }})

      });
};


const errorHandler = response => {
  response.writeHead(404, { "content-type": "text/html" });
  response.end("<h1>404 Page Requested Cannot be Found</h1>");
};

module.exports = {
  homeHandler,
  publicHandler,
  errorHandler,postsHandler
};
