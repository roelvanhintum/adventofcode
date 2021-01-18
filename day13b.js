let input = `1002576
13,x,x,x,x,x,x,37,x,x,x,x,x,449,x,29,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,19,x,x,x,23,x,x,x,x,x,x,x,773,x,x,x,x,x,x,x,x,x,41,x,x,x,x,x,x,17`;

// // Test input
// input = `939
// 1789,37,47,1889`;

input = input.split('\n');

const lines = input[1]
  .split(",")
  .reduce(
    (acc, id, i) => (
        id === "x" ? acc : [...acc, [parseInt(id, 10), i]]
    ),
    []
  );

// Had some help here...
const result = lines.reduce(([minutes, increment], [line, offset]) => {
    do {
        minutes += increment;
    } while ((minutes + offset) % line !== 0)

    const minutesFirstPass = minutes;

    do {
        minutes += increment;
    } while ((minutes + offset) % line !== 0)

    console.log(line, offset, minutes, minutesFirstPass);
    return [
        minutesFirstPass,
        minutes - minutesFirstPass
    ];
}, [0, 1]);

console.log(result);
