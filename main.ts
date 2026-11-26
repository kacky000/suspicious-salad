import { mkdirSync, writeFileSync } from "node:fs";

// One short funny line about anything.
const LIMIT = 140;
const text = "My bank froze my card for suspicious activity. I had bought a salad.";

if ([...text].length > LIMIT) throw new Error(`entry is ${[...text].length} characters`);
const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(dir, { recursive: true });
writeFileSync(`${dir}/entry.txt`, text);
