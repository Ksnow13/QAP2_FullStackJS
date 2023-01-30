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
    case "/about":
      res.statusCode = 200;
      path += "about.html";
      myRoutes.aboutPage(path, req.url, res);
      break;
    case "/contact":
      res.statusCode = 200;
      path += "contact.html";
      myRoutes.contactPage(path, req.url, res);
      break;
    case "/github":
      res.statusCode = 200;
      path += "github.html";
      myRoutes.githubPage(path, req.url, res);
      break;
    case "/github/Ksnow13":
      res.statusCode = 301;
      res.setHeader("Location", "/github");
      res.end();
      break;
    case "/about/me":
      res.statusCode = 301;
      res.setHeader("Location", "/about");
      res.end();
      break;
    case "/contact/me":
      res.statusCode = 301;
      res.setHeader("Location", "/contact");
      res.end();
      break;
    case "/cookie":
      res.statusCode = 200;
      path += "cookie.html";
      res.setHeader("Set-cookie", "fullName=Your Cookies Are Ready !");
      myRoutes.cookiePage(path, req.url, res);
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
