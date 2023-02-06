// DO NOT EDIT. This file is generated by fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import config from './deno.json' assert { type: 'json' }
import * as $0 from './routes/_404.tsx'
import * as $1 from './routes/_500.tsx'
import * as $2 from './routes/_app.tsx'
import * as $3 from './routes/blog/index.tsx'
import * as $4 from './routes/index.tsx'
import * as $5 from './routes/works/[slug].tsx'
import * as $6 from './routes/works/index.tsx'
import * as $$0 from './islands/navbar.tsx'

const manifest = {
  routes: {
    './routes/_404.tsx': $0,
    './routes/_500.tsx': $1,
    './routes/_app.tsx': $2,
    './routes/blog/index.tsx': $3,
    './routes/index.tsx': $4,
    './routes/works/[slug].tsx': $5,
    './routes/works/index.tsx': $6,
  },
  islands: {
    './islands/navbar.tsx': $$0,
  },
  baseUrl: import.meta.url,
  config,
}

export default manifest
