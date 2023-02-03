import SVG from 'components/svg.tsx'
import { socialLinks } from 'constants/socials.ts'

const Social = () => (
	<div class='flex items-center gap-1 text(pink-800 dark:pink-600)'>
		{socialLinks.map(({ path, icon, name }) => (
			<a
				key={name}
				href={path}
				target='_blank'
				rel='noreferrer noopener'
				class='transition duration-150 ease-in hover:text(pink-900 dark:pink-500)'
			>
				<SVG
					id={icon}
					title={`Ivan Atias' ${name} profile`}
					className='w-7 h-7'
				/>
				<span class='sr-only'>opens a new window</span>
			</a>
		))}
	</div>
)

export default Social
