/*
Kyle Snow
QAP 2 - JS FullStack
Keyin Collage
Jan 25 2023
*/

// syntax for including the http module
const http = require("http");

// syntax for including functions from routes.js

const myRoutes = require("./routes.js");

// creating function to set up http server with a swtich statement to gather all html files / routes
// switch cases call a function from the routes.js file to display/read contents of the html files.

const server = http.createServer((req, res) => {
  // var path hold the folder name with all the html files

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
    case "/keyin":
      res.statusCode = 200;
      path += "keyin.html";
      myRoutes.keyinPage(path, req.url, res);
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

// function to let the user know the program is working and servers are running.

server.listen(3000, "localhost", () => {
  console.log(
    "listening on port 3000, Visit http://localhost:3000/ to view the page."
  );
  console.log("Press Ctrl C to terminate...");
});
