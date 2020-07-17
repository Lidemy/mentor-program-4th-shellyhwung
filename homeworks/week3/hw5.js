const readline = require('readline');

const lines = [];
const rl = readline.createInterface({
  input: process.stdin,
});

rl.on('line', (line) => {
  lines.push(line);
});

function solve(input) {
  const group = input[0];
  for (let i = 1; i <= group; i += 1) {
    const arr = input[i].split(' ');
    // eslint-disable-next-line
    const A = BigInt(arr[0]);
    // eslint-disable-next-line
    const B = BigInt(arr[1]);
    const K = arr[2];
    if (A === B) {
      console.log('DRAW');
    } else if (K === 1) {
      console.log(A > B ? 'A' : 'B');
    } else if (K === -1) {
      console.log(A > B ? 'B' : 'A');
    }
  }
}
rl.on('close', () => {
  solve(lines);
});
