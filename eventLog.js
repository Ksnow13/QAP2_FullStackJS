/*

*/

const { format } = require("date-fns");
const { v4: uuid } = require("uuid");

const fs = require("fs");
const fsPromises = require("fs").promises;
const path = require("path");

const eventLogs = async (eventRoute, level, msg) => {
  var currentDate = `${format(new Date(), "dd/MM/yyyy\tHH:mm:ss")}`;
  var itemToLog = `${level}\t${eventRoute}\t${msg}\t${currentDate}\t${uuid()}`;

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

module.exports = eventLogs;
