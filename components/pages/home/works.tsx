import Title from 'components/layout/title.tsx'
import Section from 'components/layout/section.tsx'
import WorkCard from 'components/work-card.tsx'
import type { Work } from 'models/works.ts'

interface Props {
  works: Work[]
}

const Works = ({ works }: Props) => (
  <Section>
    <Title titleClass='lg' titleTag='h2'>
      Personal projects
    </Title>
    <ul class='grid grid-cols-1 sm:grid-cols-2 gap-8'>
      {works.map(({ _id, ...work }) => (
        <li key={_id}>
          <WorkCard {...work} />
        </li>
      ))}
    </ul>
  </Section>
)

export default Works
