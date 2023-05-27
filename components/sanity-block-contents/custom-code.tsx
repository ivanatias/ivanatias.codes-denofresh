import { refractor } from 'refractor'
import { toHtml } from 'hast-to-util-html'

// Languages
import javascript from 'refractor/lang/javascript'
import typescript from 'refractor/lang/typescript'
import jsx from 'refractor/lang/jsx'
import tsx from 'refractor/lang/tsx'
import css from 'refractor/lang/css'
import sass from 'refractor/lang/sass'
import scss from 'refractor/lang/scss'
import batch from 'refractor/lang/batch'
import json from 'refractor/lang/json'

// Register languages
refractor.register(javascript)
refractor.register(typescript)
refractor.register(jsx)
refractor.register(tsx)
refractor.register(css)
refractor.register(sass)
refractor.register(scss)
refractor.register(batch)
refractor.register(json)

// Additional possible language names
refractor.alias({ javascript: ['js', 'JavaScript'] })
refractor.alias({ typescript: ['ts', 'TypeScript'] })

interface Props {
  code: string
  language: string
}

const CustomCode = ({ code, language }: Props) => {
  const highlighted = refractor.highlight(code, language)
  const html = toHtml(highlighted)

  return <pre dangerouslySetInnerHTML={{ __html: html }} />
}

export default CustomCode
