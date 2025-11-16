#!/bin/sh
set -e

export PORT="${PORT:-3001}"
export HOSTNAME="${HOSTNAME:-0.0.0.0}"

cd /app/standalone

# Start Next.js server in background
node server.js &
NEXT_PID=$!

# Run nginx (or provided command) in foreground
trap 'kill $NEXT_PID' TERM INT
exec "$@"
