#!/bin/bash

# Clean and rebuild all dependencies, then start dev server

echo "Cleaning dependencies..."
rm -rf node_modules bun.lockb .next .source

echo "Installing dependencies..."
bun install

echo "Starting dev server..."
bun run dev
