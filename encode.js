let encoding_codes = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
  f: 6,
  g: 7,
  h: 8,
  i: 9,
  j: 10,
  k: 11,
  l: 12,
  m: 13,
  n: 14,
  o: 15,
  p: 16,
  q: 17,
  r: 18,
  s: 19,
  t: 20,
  u: 21,
  v: 22,
  w: 23,
  x: 24,
  y: 25,
  z: 26,
  " ": 27,
  "-": 28,
  "?": 29,
  "!": 30,
  "'": 31,
  "@": 32,
  "#": 33,
  $: 34,
  "%": 35,
  "^": 36,
  "&": 37,
  "*": 38,
  "(": 39,
  ")": 40,
  ".": 41,
  '"': 42,
  1: 43,
  2: 44,
  3: 45,
  4: 46,
  5: 47,
  6: 48,
  7: 49,
  8: 50,
  9: 51,
  0: 52,
  "{": 53,
  "}": 54,
  "`": 55,
  "~": 56,
  ";": 57,
  "\n": 58,
};
let decoding_codes = {
  1: "a",
  2: "b",
  3: "c",
  4: "d",
  5: "e",
  6: "f",
  7: "g",
  8: "h",
  9: "i",
  10: "j",
  11: "k",
  12: "l",
  13: "m",
  14: "n",
  15: "o",
  16: "p",
  17: "q",
  18: "r",
  19: "s",
  20: "t",
  21: "u",
  22: "v",
  23: "w",
  24: "x",
  25: "y",
  26: "z",
  27: " ",
  28: "-",
  29: "?",
  30: "!",
  31: "'",
  32: "@",
  33: "#",
  34: "$",
  35: "%",
  36: "^",
  37: "&",
  38: "*",
  39: "(",
  40: ")",
  41: ".",
  42: '"',
  43: "1",
  44: "2",
  45: "3",
  46: "4",
  47: "5",
  48: "6",
  49: "7",
  50: "8",
  51: "9",
  52: "0",
  53: "{",
  54: "}",
  55: "`",
  56: "~",
  57: ";",
  58: "\n",
};
let encoded_data = [];
let decoded_data = "";
export function encoding(data) {
  for (let words = 0; words < data.length; words++) {
    for (let letters = 0; letters < data[words].length; letters++) {
      encoded_data.push(encoding_codes[data[words][letters]]);
    }
  }
  console.log(encoded_data);
  return encoded_data;
}
export function decoding(data) {
  for (let w = 0; w < data.length; w++) {
    decoded_data = decoded_data + decoding_codes[data[w]];
  }
  console.log(decoded_data);
  return decoded_data;
}

// export function print_encoded_data() {
//   for (let index = 0; index < encoded_data.length; index++) {
//     console.log(encoded_data[index]);
//   }
// }

// export function print_decoded_data() {
//   for (let index = 0; index < encoded_data.length; index++) {
//     console.log(decoded_data[index]);
//   }
// }
