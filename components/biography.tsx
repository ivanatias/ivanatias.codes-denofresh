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
    year: 2023,
    description:
      'Worked as a freelance Software Engineer developing and designing robust applications using mainly Next.js and TypeScript, implementing comprehensive unit, integration and end-to-end testing to validate functionality and performance.',
  },
  {
    year: 2022,
    description:
      'Got offered and accepted an offer to join GML Agency as a Software Engineer. Worked on building leads generation tools using technologies such as React.js and Node.js.',
  },
  {
    year: 2021,
    description:
      "Started my path as a Front-end Engineer and UI Designer. Now I'm open for new opportunities and experiences in this field.",
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
] as const

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
