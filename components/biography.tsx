import Paragraph from 'components/layout/paragraph.tsx'

const BioYear = ({ children }: { children: number }) => (
  <span class='text-sm 2xl:text-base text-pink-800 dark:text-pink-400 font-bold'>
    {children}
  </span>
)

const BioDescription = ({ children }: { children: string }) => (
  <Paragraph>{children}</Paragraph>
)

interface BiographyItemProps {
  year: number
  description: string
}

const BiographyItem = ({ year, description }: BiographyItemProps) => (
  <div class='flex flex-col sm:flex-row sm:items-center sm:gap-5 gap-3'>
    <BioYear>{year}</BioYear>
    <BioDescription>{description}</BioDescription>
  </div>
)

const BIOGRAPHY = [
  {
    year: 2021,
    description:
      'Started my path as a Front-end Engineer and UI Designer. Now I\'m open for new opportunities and experiences in this field',
  },
  {
    year: 2020,
    description: 'Worked as a Freelance Digital Marketing Consultant.',
  },
  {
    year: 2018,
    description:
      'Obtained my Systems Engineering bachelor’s degree in “Santa María” University and co-founded GoSocial inc, a digital marketing agency.',
  },
  {
    year: 1992,
    description: 'Born in Venezuela.',
  },
]

const Biography = () => (
  <ul class='flex flex-col gap-3'>
    {BIOGRAPHY.map((item, index) => (
      <li key={index}>
        <BiographyItem {...item} />
      </li>
    ))}
  </ul>
)

export default Biography
