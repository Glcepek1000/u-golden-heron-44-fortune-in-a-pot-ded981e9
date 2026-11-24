#!/bin/sh
# Fortune in a Pot — one-shot setup/run. No dependencies to install:
# Node 22.18+ standard library only.
set -e
cd "$(dirname "$0")"
node --version
node main.ts
echo "Wrote ${OUTPUT_DIR:-/output}/entry.txt"
