import * as fs from "fs";
import * as path from "path";


function remove_file(folder_files, traget) {
  console.log(folder_files);
  for (let y = 0; y < folder_files.length; y++) {
    folder_files = folder_files.filter((item) => item !== traget[y]);
  }
  return folder_files;
}

function betterignore(directory,list_of_dot_files) {
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
let ignore = betterignore("../",dotFiles);
let new_list = remove_file(nonDotFiles,ignore);
console.log(new_list);