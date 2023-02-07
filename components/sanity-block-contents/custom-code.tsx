import Refractor from 'react-refractor'

//Languages
import javascript from 'refractor/lang/javascript'
import typescript from 'refractor/lang/typescript'
import jsx from 'refractor/lang/jsx'
import tsx from 'refractor/lang/tsx'
import css from 'refractor/lang/css'
import sass from 'refractor/lang/sass'
import scss from 'refractor/lang/scss'
import batch from 'refractor/lang/batch'
import json from 'refractor/lang/json'

//Register languages
Refractor.registerLanguage(javascript)
Refractor.registerLanguage(typescript)
Refractor.registerLanguage(jsx)
Refractor.registerLanguage(tsx)
Refractor.registerLanguage(css)
Refractor.registerLanguage(sass)
Refractor.registerLanguage(scss)
Refractor.registerLanguage(batch)
Refractor.registerLanguage(json)

interface Props {
  code: string
  language: string
}

const CustomCode = ({ code, language }: Props) => (
  <Refractor language={language} value={code} />
)

export default CustomCode
