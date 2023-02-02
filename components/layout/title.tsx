import { JSX } from 'preact'

interface Props {
	children: string
	titleClass?: string
	semibold?: boolean
	titleTag?: keyof JSX.IntrinsicElements
}

const Title = ({ children, titleClass, semibold, titleTag }: Props) => {
	const TitleTag = titleTag ?? 'h1'

	return (
		<TitleTag
			class={`${titleClass ?? 'xl-title'} ${
				semibold ? 'font-semibold' : 'font-bold'
			}`}
		>
			{children}
		</TitleTag>
	)
}

export default Title
