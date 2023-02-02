import MetaData from '../components/meta-data.tsx'
import Title from '../components/layout/title.tsx'

export default function Home() {
	return (
		<>
			<MetaData />
			<div class='text(center blue-500 5xl) p-4 mx-auto max-w-screen-md'>
				<Title>
					Home Page
				</Title>
			</div>
		</>
	)
}
