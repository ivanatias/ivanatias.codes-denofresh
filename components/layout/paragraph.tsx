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
) => (
	<p
		className={`${pClass ?? 'normal-paragraph'} ${
			semibold ? 'font-semibold' : ''
		} ${underlined ? 'underline' : ''} ${centered ? 'text-center' : ''}`}
	>
		{children}
	</p>
)

export default Paragraph
