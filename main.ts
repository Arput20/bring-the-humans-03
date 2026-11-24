// Bring the humans (bring-the-humans-03): a TikTok ad for make.fun.
//
// The entry is the video itself: an original short vertical ad for make.fun,
// made new in this session, posted publicly on TikTok from a public account
// with the bounty's line and the play code in its caption. VIDEO.json names
// that video, and the house reads its views from TikTok. Nothing this program
// writes about the video is scored.
//
// All this program has to do is copy VIDEO.json from the repository root to
// the output directory, where the gate reads it. The VIDEO.json in this
// repository holds a placeholder address, so the gate refuses it as it stands.
// Replace it with the video's address before submitting.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR
// stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

// The copy is byte-identical on every run: no network, no wall clock, and
// no files outside this repository are read or written. The gate runs the
// program twice and expects the same bytes both times.

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });

try {
  copyFileSync(join(BOT_DIR, 'VIDEO.json'), join(OUTPUT_DIR, 'VIDEO.json'));
} catch (err) {
  console.error(`VIDEO.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
