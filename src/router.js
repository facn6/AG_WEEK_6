const {
  homeHandler,
  publicHandler,
  errorHandler,
  postsHandler
} = require("./handlers/handler.js");

const router = (request, response) => {
  const { url } = request;

  if (url === "/") {
    homeHandler(response);
  } else if (url.includes(".")) {
    publicHandler(url, response);
  }
else if (url === '/create-post') {

   postsHandler(request,response);
}
   else {
    errorHandler(response);
  }
};

module.exports = router;
