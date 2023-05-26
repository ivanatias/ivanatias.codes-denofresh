import Title, { type Heading } from 'components/layout/title.tsx'
import type { HeadingStyling } from 'utils/styling.ts'

interface Props {
  children: string
  id: string
  heading?: Heading
  titleClass?: HeadingStyling
}

const Heading = (
  { children, id, heading = 'h2', titleClass = 'xl' }: Props,
) => (
  <Title titleTag={heading} titleClass={titleClass}>
    <span class='absolute -top-[90px]' id={id} />
    {children}
  </Title>
)

export default Heading
