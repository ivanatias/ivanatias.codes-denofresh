import type { ComponentChildren } from 'preact'
import Title, { type Heading } from 'components/layout/title.tsx'
import { NAVBAR_HEIGHT } from 'constants/navbar.ts'
import type { HeadingStyling } from 'utils/styling.ts'

interface Props {
  children: ComponentChildren
  id: string
  heading?: Heading
  titleClass?: HeadingStyling
}

const Heading = (
  { children, id, heading = 'h2', titleClass = 'xl' }: Props,
) => (
  <Title titleTag={heading} titleClass={titleClass}>
    <span class={`absolute -top-[${NAVBAR_HEIGHT}px]`} id={id} />
    {children}
  </Title>
)

export default Heading
