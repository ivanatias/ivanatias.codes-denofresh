import { JSX } from 'preact'
import { styling } from 'utils/styling.ts'

type Heading = Extract<
  keyof JSX.IntrinsicElements,
  'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
>

interface HeadingTagProps extends JSX.HTMLAttributes<HTMLHeadingElement> {
  as: Heading
}

interface TitleProps {
  children: string
  titleClass?: 'xl' | 'lg' | 'normal' | 'small'
  semibold?: boolean
  titleTag?: Heading
}

const HeadingTag = ({ as: As, children, ...restOfProps }: HeadingTagProps) => (
  <As {...restOfProps}>
    {children}
  </As>
)

const Title = (
  { children, titleClass = 'xl', semibold = false, titleTag = 'h1' }:
    TitleProps,
) => {
  const titleStyle = styling.headings[titleClass]

  return (
    <HeadingTag
      as={titleTag}
      className={`${titleStyle} ${semibold ? 'font-semibold' : 'font-bold'}`}
    >
      {children}
    </HeadingTag>
  )
}

export default Title
