const readline = require('readline');

const lines = [];
const rl = readline.createInterface({
  input: process.stdin,
});

rl.on('line', (line) => {
  lines.push(line);
});

function solve(input) {
  for (let i = 1; i < input.length; i += 1) {
    const n = Number(input[i]);
    // eslint-disable-next-line
    if (isPrime(n)) {
      console.log('Prime');
    } else {
      console.log('Composite');
    }
  }
}
function isPrime(n) {
  // let n = Number(input[i])
  // console.log(isPrime(n))
  if (n === 1) return false;
  for (let i = 2; i <= n - 1; i += 1) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}
rl.on('close', () => {
  solve(lines);
});
