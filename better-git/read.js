import * as fs from "fs";
import * as path from "path";
import { commit } from "./commit.js";

let saved_number = [];
function remove_file(folder_files, traget) {
  console.log(folder_files);
  for (let y = 0; y < folder_files.length; y++) {
    for (let x = 0; x < traget.length; x++) {
      folder_files = folder_files.filter((item) => item !== traget[x]);
    }
  }
  return folder_files;
}

function betterignore(directory, list_of_dot_files) {
  for (let i = 0; i < list_of_dot_files.length; i++) {
    if (list_of_dot_files[i] === ".betterignore.json") {
      const filePath = path.join(directory, list_of_dot_files[i]);
      const data = fs.readFileSync(filePath, "utf8");
      const json = JSON.parse(data);
      return json;
    }
  }
}

const folder = fs.readdirSync("../");
const dotFiles = folder.filter((file) => file.startsWith("."));
const nonDotFiles = folder.filter((file) => !file.startsWith("."));
let ignore = betterignore("../", dotFiles);
console.log(ignore);
let new_list = remove_file(nonDotFiles, ignore);
let date = new Date();
let time = date.toLocaleTimeString();
try {
  saved_number = JSON.parse(fs.readFileSync("../.commit_number.json", "utf8"));
} catch (SyntaxError) {
  saved_number = [];
}

try {
  var commit_value = commit(
    new_list,
    saved_number + 1,
    `${saved_number + 1} commit`,
    date.toLocaleDateString(),
    time,
  );
} catch (error) {
  console.error(error);
}
