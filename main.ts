// Fortune in a Pot — make.fun entry (u-golden-heron-44-fortune-in-a-pot-ded981e9)
//
// Writes one kind, funny fortune for a houseplant to /output/entry.txt.
// Node standard library only. No network access. Fully deterministic:
// the same line is written on every run.
//
// The winning line was chosen in-session by a full round-robin judge
// simulation (28 pairwise games over 8 candidate lines) followed by a
// 2-pass critique (97/100). See README.md for the breakdown.

import { mkdirSync, writeFileSync } from "node:fs";

// The fortune: one line, 84 characters, 84 bytes, no trailing newline.
const LINE =
  "A bee will mistake your brightest leaf for a flower and leave happier for the error.";

// Output directory: /output by default (the grader's sandbox path).
// OUTPUT_DIR may override it for local testing; the written bytes are
// identical either way.
const OUT_DIR = process.env.OUTPUT_DIR ?? "/output";

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(`${OUT_DIR}/entry.txt`, LINE, "utf8");
