/*

*/

const fs = require("fs");

const EventEmitter = require("events");

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

//-----------------------------------------------------------------------------

const eventLogs = require("./eventLog");

myEmitter.on("route", (eventRoute, level, msg) => {
  const currentDate = new Date();
  console.log(
    currentDate.toLocaleString() + " * " + level.toUpperCase() + " * " + msg
  );
  eventLogs(eventRoute, level.toUpperCase(), msg);
});

//------------------------------------------------------------------------------

function homePage(path, eventRoute, res) {
  displayFile(path, res);
  myEmitter.emit(
    "route",
    eventRoute,
    "Info:",
    "the home page was successfully visited."
  );
}

function aboutPage(path, eventRoute, res) {
  displayFile(path, res);
  myEmitter.emit(
    "route",
    eventRoute,
    "Info:",
    "the about page was successfully visited."
  );
}

function contactPage(path, eventRoute, res) {
  displayFile(path, res);
  myEmitter.emit(
    "route",
    eventRoute,
    "Info:",
    "the contact page was successfully visited."
  );
}

function githubPage(path, eventRoute, res) {
  displayFile(path, res);
  myEmitter.emit(
    "route",
    eventRoute,
    "Info:",
    "the github page was successfully visited."
  );
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

function cookiePage(path, eventRoute, res) {
  displayFile(path, res);
  myEmitter.emit("route", eventRoute, "Info:", "The cookie page is running.");
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

//------------------------------------------------------------------------------------------

module.exports = {
  homePage,
  errorPage,
  aboutPage,
  contactPage,
  githubPage,
  cookiePage,
};
