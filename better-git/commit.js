import * as fs from "fs";
import { encoding } from "./encoding&decoding.js";

let data = [];

let file = [];

let saved_data = [];

let saved_number = [];

export function commit(files, commit_number, commit_message, date, time) {
  try {
    saved_number = JSON.parse(
      fs.readFileSync("../.commit_number.json", "utf8"),
    );
  } catch (SyntaxError) {
    saved_number = [];
  }
  if (saved_number < commit_number && commit_number > -1) {
    try {
      saved_data = JSON.parse(fs.readFileSync("../.saved_file.json", "utf8"));
    } catch (SyntaxError) {
      saved_data = [];
    }
    for (let i = 0; i < files.length; i++) {
      file = fs.readFileSync("../"+files[i], "utf8");
      file = encoding(file);
      data.push(file);
    }
    data.push(commit_number);
    data.push(commit_message);
    data.push(date);
    data.push(time);
    saved_data.push(data);
    fs.writeFileSync(
      "../.saved_file.json",
      JSON.stringify(saved_data, null, 2),
    );
    fs.writeFileSync(
      "../.commit_number.json",
      JSON.stringify(commit_number, null, 2),
    );
  } else {
    console.log("invaild commit number");
  }
}
