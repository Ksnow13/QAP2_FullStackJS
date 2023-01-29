/*
kyle snow 

*/

const http = require("http");

const myRoutes = require("./routes.js");

//------------------------------------------------------------

const server = http.createServer((req, res) => {
  var path = "./views/";

  switch (req.url) {
    case "/":
      res.statusCode = 200;
      path += "home.html";
      myRoutes.homePage(path, req.url, res);
      break;
    default:
      res.statusCode = 404;
      path += "404.html";
      myRoutes.errorPage(path, req.url, res);
      break;
  }
});

//----------------------------------------------------------

server.listen(3000, "localhost", () => {
  console.log("listening on port 3000.");
});
