let input = `1002576
13,x,x,x,x,x,x,37,x,x,x,x,x,449,x,29,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,19,x,x,x,23,x,x,x,x,x,x,x,773,x,x,x,x,x,x,x,x,x,41,x,x,x,x,x,x,17`;

input = input.split('\n');

const departure = parseInt(input[0], 10);

const inputLines = input[1].split(',');
const lines = [];
inputLines.forEach(line => {
    if (line !== 'x') lines.push(parseInt(line, 10));
});

const timeDifferences = {};
lines.forEach(line => {
    timeDifferences[line] = line - (departure%line);
});

let entries = Object.entries(timeDifferences);
let sorted = entries.sort((a, b) => a[1] - b[1]);

const firstLine = sorted[0];

console.log(parseInt(firstLine[0], 10) * firstLine[1]);