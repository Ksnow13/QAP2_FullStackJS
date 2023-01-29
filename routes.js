/*

*/

const fs = require("fs");

const EventEmitter = require("events");

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on("route", (eventRoute, level, msg) => {
  const currentDate = new Date();
  console.log(
    currentDate.toLocaleString() + " * " + level.toUpperCase() + " * " + msg
  );
});

//------------------------------------------------------------------------------

function homePage(path, eventRoute, res) {
  displayFile(path, res);
  myEmitter.emit("route", eventRoute, "Info:", "The home page is running.");
}

function errorPage(path, eventRoute, res) {
  displayFile(path, res);
  myEmitter.emit(
    "route",
    eventRoute,
    "error",
    "a routing error occured for the " + eventRoute + " route."
  );
}
//----------------------------------------------------------------------------------------

function displayFile(path, response) {
  fs.readFile(path, function (err, data) {
    if (err) {
      console.log(err);
      response.end();
    } else {
      //console.log('file was served.')
      response.writeHead(response.statusCode, { "Content-Type": "text/html" });
      response.write(data);
      response.end();
    }
  });
}

module.exports = {
  homePage,
  errorPage,
};
