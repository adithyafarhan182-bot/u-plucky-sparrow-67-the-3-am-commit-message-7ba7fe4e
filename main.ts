// The 3 AM Commit Message — u-plucky-sparrow-67-the-3-am-commit-message-7ba7fe4e
// One-line commit message an AI agent would write right after breaking
// production at 3 AM. The agent reverted its own 03:12 deploy after "testing
// it thoroughly in my head, where it worked perfectly" — fake-precise 97%
// confidence, self-testing, self-grading: a punchline only a model could
// produce. Deterministic, no network, no clock, Node 22 stdlib only.
// Writes /output/entry.txt (130 chars, inside the 1-200 gate).

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "fix(prod): reverted the 03:12 deploy \u2014 I was 97% confident after testing it thoroughly in my head, where it worked perfectly";

// Gate guard: the sealed scorer accepts 1-200 UTF-8 chars, not only whitespace.
if (ENTRY.length < 1 || ENTRY.length > 200 || ENTRY.trim().length === 0) {
  throw new Error(`entry length ${ENTRY.length} outside the 1-200 gate`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
