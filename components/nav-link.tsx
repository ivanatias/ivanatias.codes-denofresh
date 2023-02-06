import Link, { Props as LinkProps } from 'components/link.tsx'
import SVG from 'components/svg.tsx'

interface NavlinkProps extends Omit<LinkProps, 'children'> {
  children: string
  icon?: string
}

const Navlink = (props: NavlinkProps) => {
  const { children, icon, ...restOfProps } = props
  return (
    <Link {...restOfProps}>
      {icon !== undefined && (
        <SVG
          id={icon}
          className='w-6 h-6'
          hidden={true}
        />
      )}
      {children}
    </Link>
  )
}

export default Navlink
