import Paragraph from 'components/layout/paragraph.tsx'
import Section from 'components/layout/section.tsx'
import Title from 'components/layout/title.tsx'
import SkillsList from 'components/skills.tsx'

const Skills = () => (
  <Section>
    <Title titleTag='h2' titleClass='lg'>
      Skills
    </Title>
    <div class='flex(& col) gap-6'>
      <Paragraph>
        These are some of the technologies and tools I&apos;m comfortable with:
      </Paragraph>
      <SkillsList />
    </div>
  </Section>
)
export default Skills
