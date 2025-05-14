import * as fs from "fs";
let name1 = "sheshadrinivas";
const data = {
  name: name1,
  age: 14,
  occupation: "Software Engineer",
};
const jsonData = JSON.stringify(data);
console.log(jsonData);
fs.writeFileSync("timeline.json", jsonData);
