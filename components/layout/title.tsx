import type { ComponentChildren, JSX } from 'preact'
import { type HeadingStyling, styling } from 'utils/styling.ts'

type Tags = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

type Heading = Extract<
  keyof JSX.IntrinsicElements,
  Tags
>

interface Props {
  children: ComponentChildren
  titleClass?: HeadingStyling
  semibold?: boolean
  titleTag?: Heading
}

const Title = (
  { children, titleClass = 'xl', semibold = false, titleTag }: Props,
) => {
  const Tag = titleTag ?? 'h1'
  const titleStyle = styling.headings[titleClass]

  return (
    <Tag
      className={`relative ${titleStyle} ${
        semibold ? 'font-semibold' : 'font-bold'
      }`}
    >
      {children}
    </Tag>
  )
}

export default Title

export type { Heading }
