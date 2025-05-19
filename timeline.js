import * as fs from "fs";
const data = {};
const jsonData = "";
function save(commit_number, commit, encoded_data, time, date) {
  data = {
    commit: commit,
    commit_number: commit_number,
    data: encoded_data,
    time: time,
    date: date,
  };
  jsonData = JSON.stringify(data);
  console.log(jsonData);
  fs.writeFileSync("timeline.json", jsonData);
}
