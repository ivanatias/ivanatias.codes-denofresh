import Paragraph from 'components/layout/paragraph.tsx'
import { SKILLS } from 'constants/skills.ts'

interface Props {
  skillImage: string
  skillText: string
}

const Skill = ({ skillImage, skillText }: Props) => (
  <div class='flex(& col) items-center justify-center gap-2'>
    <div class='p-1 rounded-md dark:bg-gray-100'>
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
  <div class='flex(& wrap) justify(center sm:start) items-center w-full gap(4 md:6)'>
    {SKILLS.map((skill) => <Skill key={skill.skillText} {...skill} />)}
  </div>
)

export default Skills
