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
console.log(input);

const differences = {};
let last = 0;

for (let i = 0; i < input.length; i++) {
    const current = input[i];
    // if (last !== null) {
        const diff = current - last;
        if (diff > 3) break;
        if (typeof differences[diff] === 'undefined') differences[diff] = 0;
        differences[diff]++;
    // }

    last = current;
}

differences[3]++;

console.log(differences);
console.log('Device jolt', last + 3);

console.log('Part 1 answer', differences[1] * differences[3]);