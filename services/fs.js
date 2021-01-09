const dir = "data";
const fs = require("fs");

async function save(json, name) {
  fs.writeFile(`${dir}/${name}`, JSON.stringify(json), "utf8", function (err) {
    if (err) {
      console.log("An error occured while writing JSON Object to File.");
      return console.log(err);
    }
    console.log("JSON file has been saved.");
  });
}

module.exports = { save };
