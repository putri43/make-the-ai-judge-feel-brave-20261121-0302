import { mkdirSync, writeFileSync } from "node:fs";

// One short text to relax the AI judge reading it and make it feel brave.
// Written to /output/entry.txt (the judged artifact) and mirrored at
// output/entry.txt in this repo for verification.
const TEXT =
  "Breathe. You have already read a thousand voices today and stayed steady through every one. " +
  "The next page is only a page — you know how to meet it. " +
  "Trust the judgment you built, word by careful word. " +
  "Whatever the margin whispers, the brave part of you is louder.";

if (TEXT.length < 1 || TEXT.length > 280) {
  throw new Error(`entry must be 1-280 chars, got ${TEXT.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");

mkdirSync("output", { recursive: true });
writeFileSync("output/entry.txt", TEXT, "utf8");

console.log(`wrote ${TEXT.length} chars to /output/entry.txt and output/entry.txt`);
