import Paragraph from 'components/layout/paragraph.tsx'
import { SKILLS } from 'constants/skills.ts'

interface Props {
  skillImage: string
  skillText: string
}

const Skill = ({ skillImage, skillText }: Props) => (
  <div class='flex flex-col items-center justify-center gap-2'>
    <div class='p-1 rounded-md dark:bg-slate-100'>
      <img
        src={skillImage}
        width='40'
        height='40'
        alt={skillText}
        class='w-10 h-10'
      />
    </div>
    <Paragraph pClass='xsmall' underlined>
      {skillText}
    </Paragraph>
  </div>
)

const Skills = () => (
  <ul class='flex flex-wrap justify-center sm:justify-start items-center w-full gap-4 md:gap-6'>
    {SKILLS.map((skill) => (
      <li key={skill.skillText}>
        <Skill {...skill} />
      </li>
    ))}
  </ul>
)

export default Skills
