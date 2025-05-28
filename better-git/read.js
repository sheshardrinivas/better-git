import * as fs from "fs";

import { encoding, decoding } from "./encoding&decoding.js";

function remove_file(folder_files, traget) {
  for (let y = 0; y < folder_files.length; y++) {
    folder_files = folder_files.filter((item) => item !== traget[y]);
  }
  return folder_files;
}

function betterignore(list_of_dot_files) {
  for (let i = 0; i < list_of_dot_files.length; i++) {
    if (list_of_dot_files[i] == ".betterignore.json") {
      const data = fs.readFileSync(list_of_dot_files[i], "utf8");
      const json = JSON.parse(data);
      return json;
    }
  }
}

const folder = fs.readdirSync("./");
const dotFiles = folder.filter((file) => file.startsWith("."));
const nonDotFiles = folder.filter((file) => !file.startsWith("."));
let ignore = betterignore(dotFiles);
let new_list = remove_file(nonDotFiles, ignore);
console.log(new_list);
// let encoded_data = encoding(data);
// let decoded_data = decoding(encoded_data);
