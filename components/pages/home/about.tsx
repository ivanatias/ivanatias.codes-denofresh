import Title from 'components/layout/title.tsx'
import Paragraph from 'components/layout/paragraph.tsx'
import Section from 'components/layout/section.tsx'
import type { Biography } from 'models/biography.d.ts'
import BiographyItem from 'components/biography-item.tsx'

interface Props {
  biography: Biography[]
}

const About = ({ biography }: Props) => (
  <Section>
    <Title titleTag='h2' titleClass='lg'>
      <span class='block text-center md:text-left'>Know more about me</span>
    </Title>
    <div class='flex flex-col md:flex-row items-center gap-8'>
      <img
        src='/profile-pic.webp'
        alt='Ivan Atias, Front-end Engineer and UI Designer'
        class='rounded-full w-[240px] h-[240px]'
        width='240'
        height='240'
        decoding='async'
      />
      <Paragraph>
        Hola! I&apos;m a Venezuelan Systems Engineer working as a Front-end
        Engineer and UI Designer. I thrive on creating sleek, minimalistic
        designs that are both visually stunning and user-friendly. When it comes
        to code, I firmly believe in keeping things clean and scalable - because
        who has time for spaghetti code anyway? Whether I'm designing or coding,
        my goal is always to create something that's not only beautiful but also
        functional. So, if you&apos;re looking for someone who&apos;s passionate
        about design and development (and can whip up an arepa like
        nobody&apos;s business), look no further!
      </Paragraph>
    </div>
    <div class='flex flex-col gap-3'>
      {biography.map(({ _id, ...item }) => (
        <BiographyItem
          key={_id}
          {...item}
        />
      ))}
    </div>
  </Section>
)
export default About
