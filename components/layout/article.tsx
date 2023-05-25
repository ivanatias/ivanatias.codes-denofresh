import type { ComponentChildren } from 'preact'

interface Props {
  children: ComponentChildren
  className?: string
}

const defaultStyles = 'flex flex-col w-full gap-4'

const Article = ({ children, className }: Props) => (
  <article class={className ?? defaultStyles}>
    {children}
  </article>
)

export default Article
