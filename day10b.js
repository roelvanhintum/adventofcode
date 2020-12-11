let input = `77
10
143
46
79
97
54
116
60
91
80
132
20
154
53
14
103
31
65
110
43
38
47
120
112
87
24
95
33
104
73
22
66
137
21
109
118
63
55
124
146
148
84
86
147
125
23
85
117
71
48
136
151
130
83
56
140
9
49
113
131
133
74
37
127
34
32
106
1
78
11
72
40
96
17
64
92
102
123
126
90
105
57
99
27
70
98
111
30
50
67
2
155
5
119
8
39`;

input = input.split(`
`);
input = input.map(line => parseInt(line, 10));
input = input.sort((a, b) => {
    if (a < b) return -1;
    if (a > b) return 1;

    return 0;
});
input.unshift(0);
input.push(input[input.length-1] + 3);

const arrangements = {};

function findArrangements(inputPart, arrangements) {
    const permutation = inputPart.join('|');
    if (permutation in arrangements) {
        return arrangements[permutation];
    }

    let result = 1;

    for (let i = 0; i < inputPart.length; i++) {
        const current = inputPart[i];
        const prevIndex = i - 1;
        const nextIndex = i + 1;
        const prev = inputPart[prevIndex];
        const next = inputPart[nextIndex];

        if (current - prev < 3 && next - current < 3) {
            result += findArrangements([prev, ...inputPart.slice(nextIndex)], arrangements);
        }
    }

    arrangements[permutation] = result;

    return result;
}
console.log(input.length);

console.log('Part 2 answer', findArrangements(input, arrangements));
