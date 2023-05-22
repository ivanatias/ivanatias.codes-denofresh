// DO NOT EDIT. This file is generated by fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import config from './deno.json' assert { type: 'json' }
import * as $0 from './routes/_404.tsx'
import * as $1 from './routes/_500.tsx'
import * as $2 from './routes/_app.tsx'
import * as $3 from './routes/_middleware.ts'
import * as $4 from './routes/blog/[slug].tsx'
import * as $5 from './routes/blog/index.tsx'
import * as $6 from './routes/index.tsx'
import * as $7 from './routes/sitemap.xml.ts'
import * as $8 from './routes/works/[slug].tsx'
import * as $$0 from './islands/copy-code.tsx'
import * as $$1 from './islands/mobile-menu.tsx'
import * as $$2 from './islands/socialmedia-share.tsx'
import * as $$3 from './islands/theme-toggle.tsx'

const manifest = {
  routes: {
    './routes/_404.tsx': $0,
    './routes/_500.tsx': $1,
    './routes/_app.tsx': $2,
    './routes/_middleware.ts': $3,
    './routes/blog/[slug].tsx': $4,
    './routes/blog/index.tsx': $5,
    './routes/index.tsx': $6,
    './routes/sitemap.xml.ts': $7,
    './routes/works/[slug].tsx': $8,
  },
  islands: {
    './islands/copy-code.tsx': $$0,
    './islands/mobile-menu.tsx': $$1,
    './islands/socialmedia-share.tsx': $$2,
    './islands/theme-toggle.tsx': $$3,
  },
  baseUrl: import.meta.url,
  config,
}

export default manifest
