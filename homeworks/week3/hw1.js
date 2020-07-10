const readline = require('readline');

const lines = [];
const rl = readline.createInterface({
  input: process.stdin,
});

rl.on('line', (line) => {
  lines.push(line);
});

function solve(input) {
  const n = Number(input[0]);
  let result = '';
  const star = '*';
  for (let i = 1; i <= n; i += 1) {
    result += star;
    console.log(result);
  }
}
rl.on('close', () => {
  solve(lines);
});
