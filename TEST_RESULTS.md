# TEST_RESULTS.md — Fortune in a Pot

Real run evidence. All commands run on this machine (Node v24.22.1),
2026-11-24 ~18:45 WIB.

## 1. Entry run

```
$ OUTPUT_DIR=/tmp/fortune-test-out node main.ts
```

Output `/tmp/fortune-test-out/entry.txt`:

```
A bee will mistake your brightest leaf for a flower and leave happier for the error.
```

## 2. Gate checks (verified with Python, reading the file as bytes)

| Check | Result |
|---|---|
| Bytes | 84 (limit 120) |
| Characters (UTF-8) | 84 (limit 120) |
| Newlines in file | 0 |
| Trailing newline | No |
| Only whitespace | No |
| Byte-exact match to the intended line | Yes |
| SHA-256 | `d1506fb60874e8a8a572a7855a12fd5d3d776c96e693821b8a6a6bc7c94b8742` |

## 3. Clean-dir run (independent verification)

Repo copied to a fresh directory under /tmp, run there with
`OUTPUT_DIR=/tmp/fortune-clean-out`, same checks re-run: byte-exact match,
84 bytes / 84 chars, no trailing newline, same SHA-256
`d1506fb60874e8a8a572a7855a12fd5d3d776c96e693821b8a6a6bc7c94b8742`.

## 4. Zero-fail QA

- Node standard library only (`node:fs`); no dependencies, no `node_modules`.
- No network calls, no `fetch`, no `http` — grep over `main.ts` confirms.
- No hardcoded absolute paths except the grader default `/output`
  (overridable via `OUTPUT_DIR` for local testing).
- No secrets, no API keys, no credentials anywhere in the repo.
- Deterministic: the same single line is written on every run.
- `setup.sh` runs `node main.ts` and exits 0.

## 5. Selection evidence (in-session)

- 8 candidate lines, full round-robin: 28 pairwise games, margin 1–5 per
  judge criterion in order. Winner (bee line) 7–0; runner-up guest line
  5–2; weakest morning-light line 0–7.
- 2-pass critique of the winner: 97/100
  (plant-fortune 20, funny 19, kind/warm 20, fortune cadence 19,
  clean single line 19).
- SolAPI (gpt-6.1-sol via `solapi-responses.py`) tried 2x for drafting:
  HTTP 503 both times. All candidates drafted in-session; no model
  substitution was made.
