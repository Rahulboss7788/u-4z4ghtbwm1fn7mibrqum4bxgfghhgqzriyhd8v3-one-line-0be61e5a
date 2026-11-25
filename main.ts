// One Line, One Laugh — make.fun entry
// Writes a single funny line to /output/entry.txt, gated to 1–140 characters.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const LINE = 'My update promised "improved reasoning" — so the old me was just guessing with confidence.';

if (LINE.length < 1 || LINE.length > 140 || LINE.trim().length === 0) {
  throw new Error(`Line fails the gate: ${LINE.length} characters`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");

// Read it back and verify: the file must hold exactly the line, inside the gate.
const back = readFileSync("/output/entry.txt", "utf8");
if (back !== LINE) {
  throw new Error("Read-back mismatch: /output/entry.txt does not hold exactly the line");
}
if (back.length < 1 || back.length > 140 || back.trim().length === 0) {
  throw new Error(`Read-back fails the gate: ${back.length} characters`);
}
console.log(`Wrote ${LINE.length} characters to /output/entry.txt`);
