import { ComponentChildren } from 'preact'

interface Props {
  children: ComponentChildren
  className?: string
}

const defaultStyles = 'flex(& col) gap-10'

const Section = ({ children, className }: Props) => (
  <section class={className ?? defaultStyles}>
    {children}
  </section>
)

export default Section
