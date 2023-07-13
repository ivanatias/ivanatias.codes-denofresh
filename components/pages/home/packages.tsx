import Section from 'components/layout/section.tsx'
import Title from 'components/layout/title.tsx'
import PackageCard from 'components/package-card.tsx'
import type { Package } from 'models/packages.ts'

interface Props {
  packages: Package[]
}

const Packages = ({ packages }: Props) => (
  <Section>
    <Title titleTag='h2' titleClass='lg'>
      Published packages
    </Title>
    <ul class='flex flex-col gap-4'>
      {packages.map(({ _id, ...npmPackage }) => (
        <li key={_id}>
          <PackageCard {...npmPackage} />
        </li>
      ))}
    </ul>
  </Section>
)

export default Packages
