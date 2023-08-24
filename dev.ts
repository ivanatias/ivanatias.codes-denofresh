#!/usr/bin/env -S deno run -A --watch=static/,routes/
// For some reason, importing dotenv is required,
// but it should be unnecessary since it's being loaded
// in the main entry point.
import '$std/dotenv/load.ts'
import dev from '$fresh/dev.ts'
import tailwind from './tailwind-init.ts'
import tailwindConfig from './tailwind.config.ts'

tailwind(tailwindConfig)

await dev(import.meta.url, './main.ts')
