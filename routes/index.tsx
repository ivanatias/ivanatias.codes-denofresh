import MetaData from 'components/meta-data.tsx'
import Section from 'components/layout/section.tsx'
import Article from 'components/layout/article.tsx'
import Title from 'components/layout/title.tsx'

export default function Home() {
	return (
		<>
			<MetaData />
			<Section>
				<Article>
					<Title>
						Home Page
					</Title>
				</Article>
			</Section>
		</>
	)
}
