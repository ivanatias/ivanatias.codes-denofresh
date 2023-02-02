import { ComponentChildren } from 'preact'
import Title from 'components/layout/title.tsx'
import Paragraph from 'components/layout/paragraph.tsx'

interface SmallTextProps {
	children: ComponentChildren
}

const SmallText = ({ children }: SmallTextProps) => (
	<small class='text-xs font-semibold text-black dark:text-gray-500 2xl:text-sm'>
		{children}
	</small>
)

const Footer = () => {
	const currentYear = new Date().getUTCFullYear()

	return (
		<footer class='flex flex-col items-center justify-between pt-12 pb-6'>
			<div class='flex flex-col gap-5 max-w-[824px] w-full mx-auto px-4 md:px-5'>
				<Title titleTag='h2' titleClass='lg'>
					Feel free to reach out to me!
				</Title>
				<Paragraph>
					Contact me through my email to talk about web development, design or
					any other subject.
				</Paragraph>
				<a
					class='text-base font-bold text-black dark:text-gray-300 2xl:text-lg'
					href='mailto:ivan.d.atias@gmail.com'
				>
					ivan.d.atias@gmail.com
				</a>
			</div>
			<div class='flex flex-col items-center gap-2 mt-5'>
				<SmallText>
					© {currentYear} Ivan Atias
				</SmallText>
				<SmallText>
					Made with
					<a
						href='https://fresh.deno.dev/'
						class='ml-1 underline'
						target='_blank'
						rel='noreferrer noopener'
					>
						Deno Fresh
					</a>
				</SmallText>
			</div>
		</footer>
	)
}

export default Footer
