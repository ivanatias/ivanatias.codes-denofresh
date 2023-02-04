import Paragraph from 'components/layout/paragraph.tsx'

interface BiographyProps {
  year: string
  description: string
}

interface BiographyItem {
  children: string
}

const BioYear = ({ children }: BiographyItem) => (
  <span class='text(sm 2xl:base pink-800 dark:pink-600) font-bold'>
    {children}
  </span>
)

const BioDescription = ({ children }: BiographyItem) => (
  <Paragraph>{children}</Paragraph>
)

const BiographyItem = ({ year, description }: BiographyProps) => (
  <div class='flex(& col sm:row) gap-3'>
    <BioYear>{year}</BioYear>
    <BioDescription>{description}</BioDescription>
  </div>
)

export default BiographyItem
