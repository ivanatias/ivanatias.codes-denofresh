import { styling } from 'utils/styling.ts'

interface Props {
	children: string
	pClass?: 'normal' | 'small' | 'xsmall'
	semibold?: boolean
	underlined?: boolean
	centered?: boolean
}

const Paragraph = (
	{
		children,
		pClass = 'normal',
		semibold = false,
		underlined = false,
		centered = false,
	}: Props,
) => {
	const paragraphStyle = styling.paragraphs[pClass]
	return (
		<p
			className={`${paragraphStyle} ${semibold ? 'font-semibold' : ''} ${
				underlined ? 'underline' : ''
			} ${centered ? 'text-center' : ''}`}
		>
			{children}
		</p>
	)
}

export default Paragraph
