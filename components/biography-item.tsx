import Paragraph from 'components/layout/paragraph.tsx'

const BioYear = ({ children }: { children: string }) => (
  <span class='text-sm 2xl:text-base text-pink-800 dark:text-pink-400 font-bold'>
    {children}
  </span>
)

const BioDescription = ({ children }: { children: string }) => (
  <Paragraph>{children}</Paragraph>
)

interface BiographyItemProps {
  year: string
  description: string
}

const BiographyItem = ({ year, description }: BiographyItemProps) => (
  <div class='flex flex-col sm:flex-row sm:items-center sm:gap-5 gap-3'>
    <BioYear>{year}</BioYear>
    <BioDescription>{description}</BioDescription>
  </div>
)

export default BiographyItem
