import Paragraph from 'components/layout/paragraph.tsx'

interface BiographyProps {
  year: string
  description: string
}

interface BiographyItem {
  children: string
}

const BioYear = ({ children }: BiographyItem) => (
  <span class='text-sm 2xl:text-base text-pink-800 dark:text-pink-400 font-bold'>
    {children}
  </span>
)

const BioDescription = ({ children }: BiographyItem) => (
  <Paragraph>{children}</Paragraph>
)

const BiographyItem = ({ year, description }: BiographyProps) => (
  <div class='flex flex-col sm:flex-row sm:items-center sm:gap-5 gap-3'>
    <BioYear>{year}</BioYear>
    <BioDescription>{description}</BioDescription>
  </div>
)

export default BiographyItem
