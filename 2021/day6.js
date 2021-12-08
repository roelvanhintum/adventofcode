let input = `3,5,2,5,4,3,2,2,3,5,2,3,2,2,2,2,3,5,3,5,5,2,2,3,4,2,3,5,5,3,3,5,2,4,5,4,3,5,3,2,5,4,1,1,1,5,1,4,1,4,3,5,2,3,2,2,2,5,2,1,2,2,2,2,3,4,5,2,5,4,1,3,1,5,5,5,3,5,3,1,5,4,2,5,3,3,5,5,5,3,2,2,1,1,3,2,1,2,2,4,3,4,1,3,4,1,2,2,4,1,3,1,4,3,3,1,2,3,1,3,4,1,1,2,5,1,2,1,2,4,1,3,2,1,1,2,4,3,5,1,3,2,1,3,2,3,4,5,5,4,1,3,4,1,2,3,5,2,3,5,2,1,1,5,5,4,4,4,5,3,3,2,5,4,4,1,5,1,5,5,5,2,2,1,2,4,5,1,2,1,4,5,4,2,4,3,2,5,2,2,1,4,3,5,4,2,1,1,5,1,4,5,1,2,5,5,1,4,1,1,4,5,2,5,3,1,4,5,2,1,3,1,3,3,5,5,1,4,1,3,2,2,3,5,4,3,2,5,1,1,1,2,2,5,3,4,2,1,3,2,5,3,2,2,3,5,2,1,4,5,4,4,5,5,3,3,5,4,5,5,4,3,5,3,5,3,1,3,2,2,1,4,4,5,2,2,4,2,1,4`;

// input = `3,4,3,1,2`;

const inputData = input.split(`,`);

// powerConsumption = gammaRate * epsilonRate
let fishes = [
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
];
inputData.forEach((inputLine) => {
  const index = parseInt(inputLine, 10);
  fishes[index] += 1;
});

// exponentially
// every 7 days
// the number of days until it creates a new lanternfish.
// new needs 2 more, 9

for (let i = 1; i <= 256; i++) {
  const newDay = [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
  ];

  fishes.forEach((count, index) => {
    let newIndex = index - 1;
    if (newIndex === -1) {
      newIndex = 6;
      newDay[8] += count;
    }

    newDay[newIndex] += count;
  });

  fishes = newDay;

  // console.log(fishes);
}
console.log('fishes', fishes.reduce((prev, current) => {
  return prev + current;
}, 0));
