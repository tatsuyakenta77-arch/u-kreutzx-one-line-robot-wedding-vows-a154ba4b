// One-Line Robot Wedding Vows — make.fun entry
// Writes a single line of robot wedding vows to $MAKEFUN_OUTPUT_DIR/entry.txt.
// Deterministic: the same fixed text on every run, no randomness, no network,
// no clock, no environment input beyond the output directory.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const VOW =
  "I promise to love you in sickness and in health, through every firmware update and dead battery, till death \u2014 or a factory reset \u2014 do us part.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), VOW, "utf8");
