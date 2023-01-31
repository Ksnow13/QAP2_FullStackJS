/*
Kyle Snow
QAP 2 - JS FullStack
Keyin Collage
Jan 25 2023
*/

// syntax for including the file system module

const fs = require("fs");

// get the reference of EventEmitter class of events module

const EventEmitter = require("events");

//creating an object of EventEmitter

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

// syntax for including functions from eventlog.js

const eventLogs = require("./eventLog");

// creating the function that gets called when routes load that console.logs information

// this event displays information to the console like date and time of when a routes loads of fails to load
// it also displays the route name, level and a message that the route was visted successfully or not.
// it also show the request.statusCode

myEmitter.on("route", (eventRoute, level, msg) => {
  const currentDate = new Date();
  console.log(
    currentDate.toLocaleString() + " * " + level.toUpperCase() + " " + msg
  );
  eventLogs(eventRoute, level.toUpperCase(), msg);
});

// these are the function used in route.js
// this function gathers the route info and calls the emitter function from above

function homePage(path, eventRoute, res) {
  displayFile(path, res);
  myEmitter.emit(
    "route",
    eventRoute,
    "Info:",
    `home page successfully visited with a status code of ${res.statusCode}`
  );
}

function aboutPage(path, eventRoute, res) {
  displayFile(path, res);
  myEmitter.emit(
    "route",
    eventRoute,
    "Info:",
    `about page successfully visited with a status code of ${res.statusCode}`
  );
}

function contactPage(path, eventRoute, res) {
  displayFile(path, res);
  myEmitter.emit(
    "route",
    eventRoute,
    "Info:",
    `contact page successfully visited with a status code of ${res.statusCode}`
  );
}

function githubPage(path, eventRoute, res) {
  displayFile(path, res);
  myEmitter.emit(
    "route",
    eventRoute,
    "Info:",
    `github page successfully visited with a status code of ${res.statusCode}`
  );
}

function keyinPage(path, eventRoute, res) {
  displayFile(path, res);
  myEmitter.emit(
    "route",
    eventRoute,
    "Info:",
    `keyin page successfully visited with a status code of ${res.statusCode}`
  );
}

function errorPage(path, eventRoute, res) {
  displayFile(path, res);
  myEmitter.emit(
    "route",
    eventRoute,
    "error:",
    `error occured while routing ${eventRoute} route. status code ${res.statusCode}`
  );
}

function cookiePage(path, eventRoute, res) {
  displayFile(path, res);
  myEmitter.emit(
    "route",
    eventRoute,
    "Info:",
    `cookie page successfully visited with a status code of ${res.statusCode}`
  );
}

// this function is used in the functions above to read/white the route info and display them on the server/webpage.

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

// export the functions so they can be used in other files.

module.exports = {
  homePage,
  errorPage,
  aboutPage,
  contactPage,
  githubPage,
  cookiePage,
  keyinPage,
};
