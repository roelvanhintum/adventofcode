// floor (.), an empty seat (L), or an occupied seat (#)
// If a seat is empty (L) and there are no occupied seats adjacent to it, the seat becomes occupied.
// If a seat is occupied (#) and four or more seats adjacent to it are also occupied, the seat becomes empty.

let rows = `LLLLLLLLLL.LLLLLL.LLLLLLLLLLLL.LL.LLLL.LLLLL.LLLLLLL.LLLLLL.LLLLLL.LLLLLL.LLLLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLLLLLLLLLLLLLLLL.LLLLLLL.LLLLL.LLLLLLL.LLLLLLLLLLLLL.LLLL.L.LLLLLLLLLL.LLLLLLL
LLLLLLLLLL.LLLLLL.LLLLLL.LLLLL.LLLLLLLLLLLLLLLLLLLLL.LLLLLL..LLLLL.LLLLLL.LLLLLL.LLLLLLLLLLL
LLLLLLLLLL.LLLLLLLLLLLLL.LL.LL.LLLLL.L.LLLLL.LLLLLLL.LLLLLL.LLLLLLLLLLLLL.LLLLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLLL.LLLLLL.LLLLLLLLLLLLLLLLLLL.LLLLLLL.LLL.LL.LLLLLL.LLLLLL.LLLLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLLL.LLLLLL.LLLLL.LLLLLLL.LLL.L.LLLLLLLLLLLLLLLLLLLLLLLLLLLL.LLLLLL.LLLLLLLL.LL
LLLLLLLLLLLLLLLLL.LLLLLLLLLL.LLLLLLLLL.LLLLL.LLLLLLL.LLLL.L.LLLLLLLLLLLLL.LLLLLLLLLLLLLLLLLL
.L.LL...LLLL.......L....L.LLLLLL.......LL....LL...L..L.LLL...LLL..L.L.L.L..L...............L
LLLLLLLLLL.LL.LLL.LLLLLL.LLLLL.LLLLLLL.LLLLL.LLLLLLLLLLLLLLLLLLLLLLLLLLLL.LLLLLL.LLLLLLLLLLL
LLLLLLLLLL.LLLLLL.LLLLLLL.LLLLLLLLLLLL.LLLLL.LLLL.LLLLLLLLL.LLLLLL.LLLLLL.LLLLLL.LLLLLLLLLLL
LLLLLLLLLL.LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL.LLLLLLLLLLLL..LLLLLLLLLLLLLLLLLL
LLLLLLL.LL.LLL.LLLLLLLLLLLLL.L.LLLLLLL.LLLLL.LLLLLLL.LLLLLL..LLLLLL.LLLLL.LLLLLL.LLLLLLLLLLL
.......L.LLL........LL.L....L.LL...L.....L..LL......L.....L....L.LLLL...L....L..L.L........L
LLLLLLLLLL.LLLLLLLLLLLLL.LLLLL.LLLLLLLLLLLLL.LLLLLLL.LLLLLL.LLLLLLLLLLLLL.LLLLLLLLLLLLLLLLLL
LLLLLLLL.L.LLLLLL.LLLLLLLLLLLLLLLLLLLL.LLLLL.LLLLLLL.LLLLLL.LLLLLL.LLLLLLLLLLLLL.LLLLLLLLLLL
LLLLLLLLLL.LLLLLL.LLLLLLLLLLLLLLLLLLLL.LLLLL.LLLLLLL.LLLLLL.LLLLL.LLLLLLLLLLLLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLLL.LLLLLLLLLLLL.LL.LLLL.LLLLL.LLLLLLLLLLLLLL.LLLLLL.LLLLLL.LLLLLL.LLLLLLLLLLL
LLLLLLLLLLLLLLLLL.LLL.LLLLLLLL.LLLLLLLLLLLLL.LLLLLLL.LLLLLL.LLLLLL.LLLLLLLLLLLLLLLLLLLLLLLLL
..L...L.........LL.LLLL...L...LL.L.L..L...L.L...LL..LL...L....L....LL.L...LLL........LLL....
LLLLLLLL.L.LLLLLL.LLLLLL.LLLLL.LLLLLLLLLLLLLLLLLLLLLLLLLLLL.LLLLLL.LLLLLLLLL.LLL.LLLLLLLLLLL
LLLLLLLLLL.LLLLLL.LLLLLL.LLLLL.LLLLLLLLLLLLLLLLLLLLL.LLLLLL.LLLLLL.LLLLLLLLLLLLL.LLLLLLLLLLL
LLLLLLLLLL.LLLLLL.LLLLLL.LLLLL.LLLLLLLLLLLLL.LL.LLLLLLLLLLL.LLLLLL.LLLLLL.LL.LLLLLLLLLLLLLLL
LLLLLLLLLL.LLLLLL.LLLLLLLLLLLLLLLLLLLL.LLLLL.LLLLLLL.LL.LLL.LLLLLL.LLLLLLLLLLLLLLLLLLLLLLLLL
L..L...........L....L.LLLL........L..LL....L.L.......L.L.L.....LL......L.....LLL.LL.L.L.LL.L
LLLLLLLLLLLLLLLLL.LLLLLL.LLLLLLLLLLLLL.LLLLL.LLLLLLLLLLLL.LLLLLLLLLLLLLLL.LLLLLL.LLLLLLLLLLL
LLLLLLLLLLLLLLLLL.LLLLLL.LLLLL.LLLLLLL.LLLLL.LLLLLLL.LLLLLL.LLLLLL.LLLLLLLLLLLLL.LLLLLLLLLLL
LLLLLLLLLLLLLLLLL.LLLLLL.LLLLL.LLLLLLLLLLLLL.LLLLLLL.LLLLLL.LLLLL..LLLLLL.LLLLLLLLLLL.LLLLLL
LLLLLLLLLLLLLLLLL.LLLLLL.LLLLLLLLLLLLLLLLLLL.LLLLLLL.LLLLLLLLLLLLLLLLLLLLLLLLLLL.LLLLLLL.LLL
LLLLLLLLLLLLLLLLL.LLLLLLLLLLLL.LLLLLLL.LLLLL.LLLLLLL.LLLLLL.LLLLLL.LLLLLL.LLLLLL.LLLLLLLLLLL
LLLLLLLLLL.LLLLLLLLL.LLL.LLLLL.LLLLLL..LLLLL.LLLLLLLLLLLLLL.LLLLLL.LLLLLLLLLLLLL.LLLLLLLLLLL
..L.....LLL.L..L...L......LL......L.......LL..L.L.L.L....LLLL....L....L...LL...LLL.L....LLL.
LLLLLLLLLL.LLLLLLLLLLLLL.LLLLL.LLLLLLL.LLLLLLLLLLLLLLLLLLLL.LLLLLL.LLLLLL.LLLLLL.LLLLLLL.LLL
LLLLLLLLLLLLLLLLL.LLLLLLLLLLLL.LLLLLLLLLLLLLLLLLLLLL.LLLLL.LL.LL.L.LLLLLLLLLLLLL.LLLLLLLLLLL
LLLLLLLLLL.LLLLLLLLLLLLLLLLLLLLLLLLLLL.LLLLL.LLLLLLL.LLLLLL.LLLLLLLLLL.LL.LLLLLL.LLLLLLLLLLL
LLLLLLLLLLLLLLLLL.LLLLLLLLLLLL.LLLLLLLLLLLLLLLLLLLLL.LLLLLL.LLLLLLLLLLLLL.L.LLLLLLLLLL..LLLL
LLLLL.LLLLLLLL.LLLLLLLL.LLLLLL.LLLLLL.LLLLLLLLLLLLLLLLLLLLL.LLLLLL.LLLLLL.LLLLLL.LLLLLLLLLLL
LLLLLLLLLLLLLLLLLLLLLLLL.LLLLL.LLLLLLL.LLLLLLLLLLLLLLLLLLLLLLLLLLL.L.LLLL.LLLLLL.LLLLLLLLLLL
LLLLLLLLLLLLLLLLL.LLLLLLLLLLLL.LLLLLLLLLLLLL.LLLLLLL.LLLLLLLLLLLLL.LLLLLL.LLLLLL.LLLLLLLLLLL
LLLLLLLLLLLLLLLL..LLLLLLLLLLLLLLLLLLLL.LLLLL.LLLLLLL.LLLLLL.LLLLLL.LLLLLL.LL.LLL.LLLLLLLLLLL
.....LL.L...LL....L...L.L.....L...L.L.L.L.L.L.......LL.....L.LL.LL...LLL.L.....L...L......L.
LLLLLLLLLL.LLLLLL.LLLLLL.LLLLL.LLLLLLL.LLLLL.LLLLLLL.LLLLLL.LLLLLL.LLLLLLLLLLLLL.LLLLLLLLLLL
LLLLLLLLLLLLLLLLL.LLLLLL.LLLLL.LLLLLLL.LLLLL.LL..LLL.LLLLLLLLLLLLLLLLLLLLLLLLL.LLLLLLLLLLLLL
LLLLLLLLLLLLLLLLLLLLLLLL.LLLLL.LLLLLLL.L.LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL.LLLLLL.LLLLLLLLLLL
LLLLLLLLLL.LLLLLL.LLLLLL.LLLLL.LLLLLLL.LLLLL.LLLLLLL.LLLLLLLLLL.LL.LLLLLLLLLLLLL.LLLLLLLLLL.
LLLLLLLLLLLLLLLLL.LLLLLL.LLLLL.LLLLLLLLLLLLL.LLLLLLLLLLLLLL.LLLL.L.LLLLLL.LLLLLL.LLLLLLLLLLL
LLLLLLLLLL.LLLLLL.L.LLLL.LLLLL.LLLLLLL.LLLLLLLLLLLLL.LLLLLL.LLLLLL.LLLLLLLLLLLLL.LLLLLLLLL.L
.L....LL....L....L.L....L......LL.....L..L.L....LL.......L......L.L..L.......L....L.LLL....L
LLLLLLLLLLLLLLLLL.LLLLLL.LLLLL.LLLLLLL.LLLLLLLLLLLLLLLLLLLL.LLLLLL.LLLLLLLLLLLLL.LLLLLLLLLLL
LLLLLLLLLL.LLLLLL.LLLLLLLLLLLLLLLLLLLL.LLLLLLLLLLLLL.LLLLLLLLLLLLL.LLLLLL.LLLLLL.LLLLLLLLLLL
LLLLLLLLLL.LLLLLLLLLLLLL.LLLLL.LLLLLLL.LLLLLLLLLLLLL.LLLLLL.LLLLLL.LLLLLL.LLLLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLLLLLLLLL..LLLLL.LLLLLLL.LLLLL.LLLLLLL.LLLLLL.LLLLLL.LLLLLL.LLLLLL.LLLLLLLLLLL
.L......L....L.L..L....LL.......L.LL..LL.L.....L..L.L...............LL....L...L....L....L.LL
LLLLLLLLL..LLLLLL.LLLLLL.LLLLLLLLLLLLLLLLLL..LLLLLLLLL.LLLLLLLLLLL.LLLLLLLLLLLLL.LLLLLLLLLLL
LLLLLLLLLL.LLLLLLLLLLLLL.LLLLL.LLLLLLLLLLLLL.LLLLLLL.LLLLLL.LLLLLL.LLLLLL.LLLLLLLLLLLL.LLLLL
LLLLLLLLLL.LLLLLLLLLLLLL.LLLLL.LLLLLLL.LLLLLLLLLLLLLLLLLLLL.LLLLLL.LLLLLL.LLLLLL.LLLLLLLLLLL
LLLLLLLLLL.LLLLLL.LLLLLL.LLLLL..LLLLLL.LLLLL.LLLLLLLLLLLL.L.LLLLLL..LLLLLLLLLLLL.LLLLLLLLLLL
.L..L..L.L.L.L.L.L.....L.L...L....LL.L.L....L..L.L.L........L....LL.......LL....L...L.L..LL.
LLLLLLLLLLLLLLLLLLLLLLLL.LLLLL.LLLLLLLLLLLLLLLLLLLLL..LLLLL.LLLLLL.LLLLL..LLLLLL.LLLLLLLLLLL
L.LLLLLLLL.LLLLLL.LLLLLL.LLLLL.LLLLLLLLLLLLLLLLLLLLL.LLLLLLLLLLLLL.LL.LLLLLLLLLLLLLLLLLLLLLL
LLLLLLLLLL.LLLLLL.LLLLLLLLLLLL.LLLLLLL.LLLLLLLLLLLLLLLLLLLL.L.LLLL.LLLLLL.LLLLLL.LLLLLLLLLLL
LLLLLLLLLL.LLLLLL.LLLLLLLLLLLL.LLLLLLL.LLLLL.LLLLLLL.LLLLLLLLLLLLL.LLLLLL.LLLLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLLL.LLLLL..LLLLL.LLLLLLLLLLLLL.LLLLL.L.LLLLLL.LLLLLL.LLLLLLLLLLLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLLLLLLLLLLLLLLLL.LLLLLLLLLLLLL.LLLLLLL.LLLLLLLLLLLLL.LLLLLL.LLLLLL..LLLLLLLLLL
LLLLLLLLLLL.LLLLL.LLLLLL.LLLLLLLLLLLLLLLLLLLLLLLLLLL.LLLLLLLLLLLLL..LLLLL.LLLLLLLLLL.LLLLLLL
LLLLLLLLLLLLLLLLLLLLLLL.LLLLLL.LLLLLLL.LLLLL.LLLLLLL.LLLLLLLLLLL.L.L.LLLL.LLLLLL.LLLLLLLLLLL
LLLLLLLLLL.LLLLLLLLLLLLLLLLLLL.LLLLLLLLLLLLLLLLLLLLL.LLLLLL.LLLLLL.LLLLLL.LLLL.LLLLLLLLLLLLL
LLLLL....L.LL..LLL.L...LL.....L............L...............L..L.LLLLL.L.L.......L..LL.L...L.
LLLLLLLLLL.LLLLLL.LLLLL..LLLLLLLLLLLLL.LLLLL.LLLLLLL.LLLLLL.LLLLLL.LLLLLL.LLLLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLLLLLLLLLLLLLLLL.LLLLLLL.LLLLL.LLLLLLL.LLL.LL.LLLLLL..LLLLL.LLLLLL.L.LLLLLLLLL
LLLLLLLLLL.LLLLLLLLLLLLLLLLLLL.LLLLLLL.LLLLL.LLLLLLL.LLLLLLLLLLLLL.LLLLLLLLLLLLL.LLLLLLLLLLL
LLLLLLLLLL.LLLLLLLLLLLLL.LLLLLLLLLLLLLLLLLLL.LLLLLLLLLLLLLL.LLLLLLLLLLLLL.LLLLLLLL.LLLLLLLLL
LLLLLLLLLL.LLLLLL.LLLLLL.LLLLLLLLLLLLL.L.LLLLL.LLLLL.LLLLLLLLLLLLL.LLLLLL.LLLLLLLLLLLLL.LLLL
.....L...L......L...LL.L.......LL.L...LL..LL.....L.......LL.LL......LL.L...L..L..L...L.LLL..
LLLLLLLLLL.LLLLLL.LLLLLL.LLLLLLLLLLLLLLLLLLL.LLLLLLLLLLLLLL.LLLLLL.LLLLLL.LLLLLL..LLLLLLLLLL
LLLLLL.LLL.LLLLLL.LLLLLL.LL.LL.LLLLLLL.LLLLL.LLLLLLL.LLLLLLLLLLLLLLLLLLLLLLLLLLL.LLLLLLLLLLL
LLLLLLLLLL.LLLLLL.LLLLLL.LLLLL.LLLLLLLLLLLLL.LLLLLLL.LLLLLL.LLLLLLLLLL.LLLLLLLLL.LLLLLLLLLLL
LLL.LLL.LL..LLLLL.LLLLLL.LLLLL.LLLLLLL.LLLLLLLLLLLLL.LLLLLLL.LLLLLLLLLLLLLLLLLLLLLLLLLLLLLL.
LLLLLLLLL.LLLLLLL.LLLLLL.LLLLL.LLLLLLL.LLLLL.LLLLLLL.LLLLLL.LLLLLL.LLLLLL.LLLLLLLLLLLL.LLLLL
LLLLLLLLLL.LLLLLL.LLLLLLLLLLLLLLLLLLLLLLLLLL.LLLLLLL.LLLLLLLLLLLLLL.LLLLL.LLLLLLLLLLLLLLLLLL
LLLLLLLLLL.LLLLLL.L.LLLLLLLLLL.LLLL.LL.LLLLL.LLLLLLL.LLLLLL.LLLLLLLLLLLLL.LLLL.L.L.LLLLLLLLL
LLLLLLLLLL.LLLLLLLLLLLLL.LLLLL.LLLLLLL.LLLLLLLLLLLLLLLLLLLLLLLLLLL.LLLLLL.LLLLLL.LLLLLLLLLLL
LLLLLLLLLL.LLLLLL.LLLLLL.LLLLL.LLLLLLLLLLLLL.LLLLLLL.LLLLLL.LLLLLL.LLLLLLLLLLLLL.LLLLLLLLLLL
.LL.LLL.L.L.L..L....L..L...L......L......L.L.L...L.L..L.L.LLLLL..L.LL.LLL.L...LL.LL...L.L.L.
LLLLLLLLLLLLLLLLLLLLLLLL.LLLLLLLLLLLLL.LLLLLLL.LLLLLLLLLLLL.LLLLLL.LLLLLL.LLLLLL.LLL.LLLLLLL
LLLLLLLLLLLLLLLLL.LLLLLLLLLLLL.LLLLLLL.LLLLLLLLLLLLL.LLLLLL.LLLLLL.LLLLLL.LLLLLL.LLLLLLLLLLL
LLLLLLLLLL.LLLLLL.LLLLLL.LLLLL.LLLLLLL.LLLLL.LLLLLLL.LLLLLL.LLLLL..LLLLLL.LLLLLL.LLLLLLLLLLL
LLLLLLLLLL.LLLLLL.LLLLLLLLLLLL.LLLLLLL.LLLLL.LLLLLLLLLLLLLLLLLLLLLLLLLLLL.LLLLLLLLLLLLLLLLLL
LLLL.LLLLL.LLLLLLLLLLLLL.LLLLL.LLLLLLLLLLLLL.LLLLLLL.LLLLLL.LLLLL.LLLLLLLLLLLLLLLLLLLLLLLLLL
LLLLLLLLLL.LLLLLL.LLLLLL.LL.LLLLLLLLLLLLLLLL.LLLLLLLLLLLLLLLLLLLLL.LLLLLL.LLLLLL.LLLLLLLLLLL
..L.LLLL.L...LL.L....L..LL..L.....L....L.L...LL.......L.L..LL..LL............L...LL.....L...
LLLLLLLLLL.LLLLLL.LLLLLL.LLLLLL.LLLLLLLLLLLLLLLLLLLL.LLLLLL.LLLLLL.LLLLLLLLLLLLL.LLLLLLLLLLL
LLLLLLLLLL.LLLLLL.LLLLLL.LLLLLLLLLLLLL.LLLLLLLLLLLLL.LLLLLLLLLLLLL.LLLLLLLL.LLLL.LLLLLLLLLLL
LLLLLLLLLLLLL.LLL.LLLLLL..LLLL.LLLLLLLLLLLLL.LLLLLLLLLLLLLL.LLLLLL.LLLLLL.LLLLLLLLLL..LLLLL.
LLLLLLLLLL.LLLLLL..LLLLL.LLLLL.LLLLLLL..LLLL.LLLLLLL.LLLLLL.LLLLLL.LLLLLL.LLLLLL.LLLLLLLLLLL
LLLLLLLLLL.LLLLLL.LLLLLL.LLLLL.LLLLLLL.LLLLL.L.LLLLL.LLLLLLLLLLLLLL.LLLLL.LLLLLLLLLLLLLLLLLL
LLLLLLLLLL.LLLLLL.LLLLLL.LLLLL.LLLLL.L.LLLLLLLLLLLLL.LL.LLLLL.LLLL.LLLLLL.LLLLLLLLLL.LLLLLLL
LLLLLLLLLLLLLLLLL.LLLLLL.LLLLL.LLLLLLL.LLLLL..LLLLLL.LLLLLL.LLLLLL.LLLLLL.LLLLLL.LLLLLLLLLLL
LLLLLLLLLL.LLL.LLLLLLLLL.LLLLL.LLLLLLLLLLLL..LLLLLLL.LLLLL..LLLLLL.LLLLLL.LLLLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLLL.LLLLLL.LLLLL.LLLLLLL.LLLLLLLLLLLLL.LLLLLL.LLLLLL.LL.LLLLLLLLLL.LLLLLLLLLLL`;

rows = rows.split(`
`);
rows = rows.map(line => line.split(''));

function findSeat(rowN, seatN, rowDir, seatDir) {
    let i = 1;

    while (
        (rowN + rowDir * i >= 0) &&
        (rowN + rowDir * i <= rows.length - 1) &&
        (seatN + seatDir * i >= 0) &&
        (seatN + seatDir * i <= rows[0].length - 1)
    ) {
        const seat = rows[rowN + rowDir * i][seatN + seatDir * i];
        if (seat !== '.') return seat;

        i++;
    }

    return '.';
}

function adjacentSeats(rowN, seatN) {
    const seats = [];

    const topLeft = findSeat(rowN, seatN, -1, -1);
    if (topLeft) seats.push(topLeft);

    const top = findSeat(rowN, seatN, -1, 0);
    if (top) seats.push(top);

    const topRight = findSeat(rowN, seatN, -1, 1);
    if (topRight) seats.push(topRight);

    const left = findSeat(rowN, seatN, 0, -1);
    if (left) seats.push(left);

    const right = findSeat(rowN, seatN, 0, 1);
    if (right) seats.push(right);

    const bottomLeft = findSeat(rowN, seatN, 1, -1);
    if (bottomLeft) seats.push(bottomLeft);

    const bottom = findSeat(rowN, seatN, 1, 0);
    if (bottom) seats.push(bottom);

    const bottomRight = findSeat(rowN, seatN, 1, 1);
    if (bottomRight) seats.push(bottomRight);

    return seats;
}

let isChanging = true;
let loops = 0;
while (isChanging) {
    loops++;
    const newRows = [];
    let changes = 0;

    rows.forEach((row, rowN) => {
        newRows[rowN] = [];
        row.forEach((seat, seatN) => {
            const seats = (seat === 'L' || seat === '#') ? adjacentSeats(rowN, seatN) : null;
            if (seat === 'L' && seats.filter(value => value === '#').length === 0) {
                newRows[rowN][seatN] = '#';
                changes++;
            } else if (seat === '#' && seats.filter(value => value === '#').length >= 5) {
                newRows[rowN][seatN] = 'L';
                changes++;
            } else {
                newRows[rowN][seatN] = seat;
            }
        });
    });

    rows = newRows;

    console.log(loops, changes);

    if (changes === 0) isChanging = false;
}

let total = 0;
let taken = 0;
rows.forEach(row => {
    row.forEach(seat => {
        total++;
        if (seat === '#') taken++;
    });
});

console.log('Seats total', total);
console.log('Seats loops', loops);
console.log('Seats taken', taken);
