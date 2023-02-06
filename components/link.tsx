import { ComponentChildren } from 'preact'

interface Props {
  children: ComponentChildren
  href: string
  isExternal?: boolean
  className?: string
  onClick?: () => void
}

const defaultStyles =
  'flex items-center gap-1 font-semibold text(black dark:gray-300) decoration(black dark:gray-300) transition-all duration-150 underline-offset-4 hover:underline dark:hover:text-white dark:hover:decoration-white'

const Link = (props: Props) => {
  const { children, isExternal = false, className } = props
  const target = isExternal ? '_blank' : undefined
  const rel = isExternal ? 'noreferrer noopener' : undefined

  return (
    <a class={className ?? defaultStyles} target={target} rel={rel} {...props}>
      {children}
    </a>
  )
}

export default Link

export type { Props }
