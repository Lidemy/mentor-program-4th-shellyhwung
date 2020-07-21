const readline = require('readline');

const lines = [];
const rl = readline.createInterface({
  input: process.stdin,
});

rl.on('line', (line) => {
  lines.push(line);
});


function upsidedown(str) {
  let result = '';
  for (let i = str.length - 1; i >= 0; i -= 1) {
    result += str[i];
  }
  return result;
}

function solve(input) {
  const str = input[0];
  if (upsidedown(str) === str) {
    console.log('True');
  } else {
    console.log('False');
  }
}
rl.on('close', () => {
  solve(lines);
});
