import type { ComponentChildren, JSX } from 'preact'

interface Props {
  children: ComponentChildren
  href: string
  isExternal?: boolean
  className?: string
  onClick?: () => void
  styles?: JSX.CSSProperties
  ariaLabel?: string
}

const defaultStyles =
  'flex items-center gap-1 font-semibold text(black dark:gray-300) decoration(black dark:gray-300) transition-all duration-150 underline-offset-4 hover:underline dark:hover:text-white dark:hover:decoration-white'

const Link = (
  {
    children,
    isExternal = false,
    className,
    styles = {},
    ariaLabel,
    ...restOfProps
  }: Props,
) => {
  const target = isExternal ? '_blank' : undefined
  const rel = isExternal ? 'noreferrer noopener' : undefined

  return (
    <a
      class={className ?? defaultStyles}
      target={target}
      rel={rel}
      style={styles}
      aria-label={ariaLabel}
      {...restOfProps}
    >
      {children}
      {isExternal && <span class='sr-only'>opens a new window</span>}
    </a>
  )
}

export default Link

export type { Props }
