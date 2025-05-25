import * as fs from "fs";

import { encoding, decoding } from "./encoding&decoding.js";

function remove_file(folder_files, traget) {
  for (
    let files_in_folder = 0;
    files_in_folder < folder_files.length;
    files_in_folder++
  ) {
    if (folder_files[files_in_folder] === traget) {
      folder_files.splice(0, files_in_folder);
    }
  }
}

const folder = fs.readdirSync("./better-git");

const dotFiles = folder.filter((file) => file.startsWith("."));
const nonDotFiles = folder.filter((file) => !file.startsWith("."));
console.log(dotFiles);
const data = fs.readFileSync(nonDotFiles[0], "utf8");
console.log(data);
let encoded_data = encoding(data);
let decoded_data = decoding(encoded_data);
