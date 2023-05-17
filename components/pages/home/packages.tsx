import Section from 'components/layout/section.tsx'
import Title from 'components/layout/title.tsx'
import PackageCard from 'components/package-card.tsx'
import type { Package } from 'models/packages.d.ts'

interface Props {
  packages: Package[]
}

const Packages = ({ packages }: Props) => (
  <Section>
    <Title titleTag='h2' titleClass='lg'>
      Published packages
    </Title>
    {packages.map(({ _id, ...npmPackage }) => (
      <PackageCard key={_id} {...npmPackage} />
    ))}
  </Section>
)

export default Packages
