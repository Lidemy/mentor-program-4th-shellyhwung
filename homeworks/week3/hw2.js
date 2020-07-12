const readline = require('readline');

const lines = [];
const rl = readline.createInterface({
  input: process.stdin,
});

rl.on('line', (line) => {
  lines.push(line);
});

function digitscount(n) {
  let m = n;
  if (m === 0) return 1;
  let result = 0;
  while (m !== 0) {
    m = Math.floor(m / 10);
    result += 1;
  }
  return result;
}

function isNarcissistic(n) {
  let m = n;
  const digits = digitscount(m);
  let sum = 0;
  while (m !== 0) {
    const num = m % 10;
    sum += num ** digits;
    m = Math.floor(m / 10);
  }
  if (sum === n) {
    return true;
  }
  return false;
}

function solve(input) {
  const temp = input[0].split(' ');
  const n = Number(temp[0]);
  const m = Number(temp[1]);
  for (let i = n; i <= m; i += 1) {
    if (isNarcissistic(i)) {
      console.log(i);
    }
  }
}

rl.on('close', () => {
  solve(lines);
});
