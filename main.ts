// A Queue Is a Caterpillar Made of People
// Everyday Things, Two Lines, Longer Run — make.fun
//
// Line 1 explains one everyday thing (a queue) to a 10-year-old in a single
// vivid sentence built on one analogy. Line 2 says why that analogy works:
// what it maps, and what it leaves out. The program writes exactly those
// two lines to /output/entry.txt (1-400 characters, per the gate).

import { mkdirSync, writeFileSync } from "node:fs";

const lines = [
  "A queue is a caterpillar made of people: it only crawls forward when the person at the very front takes a step, and everyone else just follows the shoes in front of them.",
  "The caterpillar fits because one slow head holds back the whole line, but it leaves out that people can chat, swap places, or walk away, and a caterpillar cannot.",
];

const entry = lines.join("\n") + "\n";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
console.log(`wrote ${entry.length} characters to /output/entry.txt`);
