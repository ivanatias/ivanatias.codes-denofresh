import type { ComponentChildren } from 'preact'
import { type ParagraphStyling, styling } from 'utils/styling.ts'

interface Props {
  children: ComponentChildren
  pClass?: keyof ParagraphStyling
  semibold?: boolean
  underlined?: boolean
  centered?: boolean
}

const Paragraph = (
  {
    children,
    pClass = 'normal',
    semibold = false,
    underlined = false,
    centered = false,
  }: Props,
) => {
  const paragraphStyle = styling.paragraphs[pClass]
  return (
    <p
      class={`${paragraphStyle} ${semibold ? 'font-semibold' : ''} ${
        underlined ? 'underline' : ''
      } ${centered ? 'text-center' : ''}`}
    >
      {children}
    </p>
  )
}

export default Paragraph
