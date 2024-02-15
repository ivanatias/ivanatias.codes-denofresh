#!/usr/bin/env -S deno run -A --watch=static/,routes/

import dev from '$fresh/dev.ts'
import tailwind from './tailwind-init.ts'
import tailwindConfig from './tailwind.config.ts'
import '$std/dotenv/load.ts'

tailwind(tailwindConfig)

await dev(import.meta.url, './main.ts')
