/*
Kyle Snow
QAP 2 - JS FullStack
Keyin Collage
Jan 25 2023
*/

// syntax for including the npm packages (date-fns & uuid)

const { format } = require("date-fns");
const { v4: uuid } = require("uuid");

// syntax for including the file system module

const fs = require("fs");
const fsPromises = require("fs").promises;
const path = require("path");

// function to capture and log route activity/info to a text file
// if the text file doesnt exist, the function will create one for you.

const eventLogs = async (eventRoute, level, msg) => {
  var currentDate = `${format(new Date(), "dd/MM/yyyy\tHH:mm:ss")}`;
  var itemToLog = `${level}\tDate/time - ${currentDate}\tRoute - [${eventRoute}]\t${msg}\t ID - ${uuid()}`;

  try {
    if (!fs.existsSync(path.join(__dirname, "logHistory"))) {
      await fsPromises.mkdir(path.join(__dirname, "logHistory"));
    }
    const fileName = `${format(new Date(), "yyyyMMdd")}` + "_httpevents.log";
    await fsPromises.appendFile(
      path.join(__dirname, "logHistory", fileName),
      itemToLog + "\n"
    );
  } catch (error) {
    console.log(error);
  }
};

// export function to be used in the routes.js file

module.exports = eventLogs;
