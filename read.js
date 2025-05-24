import * as fs from "fs";

import { encoding, decoding } from "./encoding&decoding.js";

const folder = fs.readdirSync(".");

const data = fs.readFileSync(folder[5], "utf8");
let encoded_data = encoding(data);
let decoded_data = decoding(encoded_data);
