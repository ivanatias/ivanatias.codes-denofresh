import Title from 'components/layout/title.tsx'
import Paragraph from 'components/layout/paragraph.tsx'
import Social from 'components/social.tsx'

const Header = () => (
  <header class='flex flex-col gap-12 relative pb-24'>
    <div class='flex flex-col gap-4'>
      <div class='flex flex-col gap-1'>
        <span class='text-indigo-700 dark:text-indigo-400 text-2xl md:text-3xl lg:text-4xl font-semibold'>
          Code.
        </span>
        <span class='text-green-800 dark:text-green-400 text-2xl md:text-3xl lg:text-4xl font-semibold pl-4'>
          Design.
        </span>
        <span class='text-pink-800 dark:text-pink-400 text-2xl md:text-3xl lg:text-4xl font-semibold pl-8'>
          Create.
        </span>
      </div>
      <Paragraph pClass='small'>
        Aesthetic design meets functionality, performance, and scalability.
      </Paragraph>
    </div>
    <div class='relative flex flex-col gap-2 items-center max-w-xs mx-auto'>
      <Title>
        Ivan Atias
      </Title>
      <Paragraph semibold centered>
        Front-end Engineer and UI Designer
      </Paragraph>
      <Social />
      <div class='absolute bottom-[10%] left-0 rounded-full w-[70px] h-[110px] bg-gradient-to-l from-pink-300 dark:from-pink-400 to-indigo-800 dark:to-indigo-500 blur-[54px] dark:blur-[76px]' />
      <div class='absolute -top-[72%] right-[12%] rounded-full w-[80px] h-[124px] bg-green-300 blur-[54px] dark:blur-[76px]' />
    </div>
  </header>
)

export default Header
