import Title from 'components/layout/title.tsx'
import Paragraph from 'components/layout/paragraph.tsx'
import Social from 'components/social.tsx'

const Header = () => (
	<header class='flex flex-col items-center gap-5 pb-12 pt-28'>
		<img
			src='/profile-pic.webp'
			class='rounded-full ring(& 2 gray-900 dark:gray-100)'
			width='150'
			height='150'
			alt='Ivan Atias, Front-end Engineer and UI Designer'
		/>
		<div class='flex flex-col items-center gap-2'>
			<Title>Ivan Atias</Title>
			<Paragraph semibold centered>
				Front-end Engineer and UI Designer based in Venezuela
			</Paragraph>
		</div>
		<Social />
	</header>
)

export default Header
