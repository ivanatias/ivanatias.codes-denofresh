import { ComponentChildren } from 'preact'

interface Props {
	children: ComponentChildren
}

const Section = ({ children }: Props) => (
	<section class='flex flex-col gap-10'>
		{children}
	</section>
)

export default Section
