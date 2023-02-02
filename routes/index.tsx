import MetaData from '../components/meta-data.tsx'
import Section from '../components/layout/section.tsx'
import Title from '../components/layout/title.tsx'

export default function Home() {
	return (
		<>
			<MetaData />
			<Section>
				<Title>
					Home Page
				</Title>
			</Section>
		</>
	)
}
