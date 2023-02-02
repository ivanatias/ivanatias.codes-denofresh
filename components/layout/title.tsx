import { JSX } from 'preact'
import { styling } from 'utils/styling.ts'

interface Props {
	children: string
	titleClass?: 'xl' | 'lg' | 'normal' | 'small'
	semibold?: boolean
	titleTag?: keyof JSX.IntrinsicElements
}

const Title = ({ children, titleClass = 'xl', semibold, titleTag }: Props) => {
	const TitleTag = titleTag ?? 'h1'
	const titleStyle = styling.headings[titleClass]

	return (
		<TitleTag
			class={`${titleStyle} ${semibold ? 'font-semibold' : 'font-bold'}`}
		>
			{children}
		</TitleTag>
	)
}

export default Title
