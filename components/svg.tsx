interface Props {
	className?: string
	color?: string
	id: string
	hidden?: boolean
	noFill?: boolean
	title?: string
}

const SVG = ({
	className = '',
	color = 'currentColor',
	id,
	hidden = false,
	noFill = false,
	title = '',
}: Props) => {
	const fill = noFill ? 'none' : color
	const classNames = `inline-block ${className}`

	return (
		<svg class={classNames} fill={fill} role='img' aria-hidden={hidden}>
			{title !== '' && <title>{title}</title>}
			<use href={`/images/sprite.svg#${id}`} />
		</svg>
	)
}

export default SVG
