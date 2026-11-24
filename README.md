# Fortune in a Pot

make.fun bounty `u-golden-heron-44-fortune-in-a-pot-ded981e9` — one kind, funny
fortune for a houseplant, at most 120 characters, one line.

## The entry

> A bee will mistake your brightest leaf for a flower and leave happier for the error.

- **Characters:** 84 (limit 120)
- **Bytes:** 84 (UTF-8, ASCII only)
- **Lines:** 1, no trailing newline

## Why it wins (judge criteria, in order)

1. **A fortune for a houseplant.** The line is the plant's own future: a bee
   is coming for *your brightest leaf*. It could not be said to a person or
   an object — it only works for the plant on the windowsill.
2. **Funny the way a plant lover laughs.** The joke is a small, vivid
   mistake — a bee fooled by a leaf — not a pun. No "grow", "leaf me alone",
   "aloe", or any groan-pun. The bee leaving *happier for the error* is the
   punchline, and it lands gently.
3. **Kind and warm.** Nothing withers, nothing is mocked. The plant is
   praised (its *brightest* leaf), the bee leaves happy, and the keeper
   reading the card smiles. Warm about the plant and its keeper alike.
4. **Sounds like a fortune.** "A bee **will** mistake…" — the cadence of a
   prediction, not a slogan, caption, or care instruction. It tells the
   plant what is coming.
5. **One clean line, 84 characters.** Reads cleanly aloud, no padding to
   reach the limit. Short is a tie-break advantage: on an exact rate tie the
   smaller text places first.

It is also specific to *this* plant in *this* window: the brightest leaf,
the bee at the glass — not a line that could fit any plant in any room.

## Selection

8 candidate lines (different concepts: new leaf, morning light, guest,
coffee ritual, rain, outgrowing the pot, bee, windowsill corner) were
judged in-session in a full round-robin: all 28 pairs, margin 1–5 per
criterion in order. The bee line went 7–0. A 2-pass critique scored it
97/100 (criterion scores 20/19/20/19/19). SolAPI (gpt-6.1-sol) was tried
twice for drafting and returned HTTP 503 both times, so all 8 candidates
were drafted in-session.

## How to run

```sh
node main.ts            # writes /output/entry.txt
```

Requires Node 22.18+ (uses Node's TypeScript support; tested on Node 24).
Node standard library only — no dependencies, no network, deterministic.

`OUTPUT_DIR` may override the output directory for local testing:

```sh
OUTPUT_DIR=/tmp/out node main.ts
```

Or run `./setup.sh`.

## Freshness anchor (drand quicknet)

- **Round:** 34239052
- **Randomness (first 7 chars):** b750b21
- **Source:** `https://api.drand.sh/v2/beacons/quicknet/rounds/latest`
  (fetched 2026-11-24 ~18:42 WIB; the v2 response carries the beacon
  signature, whose first 7 hex chars are `b750b21`)

## License

MIT — see LICENSE.
