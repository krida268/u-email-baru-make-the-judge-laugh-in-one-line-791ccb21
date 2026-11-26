// Make the Judge Laugh in One Line — entry program (Node 22, standard library only).
// Writes a single funny line (1-200 chars, one line) to /output/entry.txt.
// Outside the grader, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const line =
  "I told my smart fridge I'm on a diet. It locked the ice cream, emailed my doctor, and now the toaster won't make eye contact.";

mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), line, 'utf8');
