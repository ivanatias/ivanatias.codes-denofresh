import Title from 'components/layout/title.tsx'
import Paragraph from 'components/layout/paragraph.tsx'
import Social from 'components/social.tsx'

const Header = () => (
  <header class='flex(& col) pt-40 pb-24 gap-12 relative'>
    <div class='flex(& col) gap-4'>
      <div class='flex(& col) gap-1'>
        <span class='text(indigo-700 dark:indigo-400 2xl md:3xl lg:4xl) font-semibold'>
          Code.
        </span>
        <span class='text(green-700 dark:green-400 2xl md:3xl lg:4xl) font-semibold pl-4'>
          Design.
        </span>
        <span class='text(pink-700 dark:pink-400 2xl md:3xl lg:4xl) font-semibold pl-8'>
          Create.
        </span>
      </div>
      <Paragraph pClass='small'>
        Aesthetic design meets functionality, performance, and scalability.
      </Paragraph>
    </div>
    <div class='relative flex(& col) gap-2 items-center max-w-xs mx-auto'>
      <Title>
        Ivan Atias
      </Title>
      <Paragraph semibold centered>
        Front-end Engineer and UI Designer
      </Paragraph>
      <Social />
      <div class='absolute bottom-[10%] left-0 rounded-full w-[70px] h-[110px] bg-gradient-to-l from(& pink-800 dark:pink-400) to(& indigo-800 dark:indigo-500) blur-filter' />
      <div class='absolute -top-[72%] right-[12%] rounded-full w-[80px] h-[124px] bg(& green-600 dark:green-300) blur-filter' />
    </div>
  </header>
)

export default Header
