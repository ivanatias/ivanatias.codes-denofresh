import { green } from '$std/fmt/colors.ts'
import { deferred } from '$std/async/deferred.ts'
import { ensureFile } from '$std/fs/mod.ts'
import autoprefixer from 'npm:autoprefixer@10.4.14'
import tailwindcss, { Config as TailwindConfig } from 'npm:tailwindcss@3.3.2'
import postcss, { PluginCreator } from 'npm:postcss@8.4.23'
import cssnano from 'npm:cssnano@6.0.1'

const twBundle = deferred()

const FROM = './tailwind.css'
const TO = './static/styles/main.css'

const tailwindInitialize = async (
  twConfig: Partial<TailwindConfig>,
) => {
  const processor = postcss([
    (tailwindcss as PluginCreator)(twConfig),
    autoprefixer(),
    cssnano({ preset: ['default', { cssDeclarationSorter: false }] }),
  ])

  const css = await Deno.readTextFile(FROM)
  const result = await processor.process(css, { from: FROM, to: TO })

  await ensureFile(TO)
  await Deno.writeTextFile(TO, result.css)

  console.info(`${green('TailwindCSS has been generated')}`)

  twBundle.resolve()
}

export default tailwindInitialize
