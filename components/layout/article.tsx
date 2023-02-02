import { ComponentChildren } from 'preact'

interface Props {
	children: ComponentChildren
}

const Article = ({ children }: Props) => (
	<article class='flex flex-col w-full gap-4'>
		{children}
	</article>
)

export default Article
