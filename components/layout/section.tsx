import type { ComponentChildren } from 'preact'

interface Props {
  children: ComponentChildren
  className?: string
}

const defaultStyles = 'flex flex-col gap-8'

const Section = ({ children, className }: Props) => (
  <section class={className ?? defaultStyles}>
    {children}
  </section>
)

export default Section
