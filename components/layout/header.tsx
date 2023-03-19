import Title from 'components/layout/title.tsx'
import Paragraph from 'components/layout/paragraph.tsx'
import Social from 'components/social.tsx'

const Header = () => (
  <header class='flex(& col) items-center gap-5 pb-12 pt-28'>
    <img
      src='/profile-pic.webp'
      class='rounded-full ring(& 2 gray-900 dark:gray-100)'
      width='150'
      height='150'
      alt='Ivan Atias, Front-end Engineer and UI Designer'
      decoding='async'
    />
    <div class='flex(& col) items-center gap-2'>
      <Title>
        Ivan Atias
      </Title>
      <Paragraph pClass='small' semibold centered>
        <span class='bg-gradient-to-r text-transparent bg-clip-text from-gray-600 to-pink-800 dark:from-pink-200 dark:to-pink-100'>
          Front-end Engineer and UI Designer based in Venezuela
        </span>
      </Paragraph>
    </div>
    <Social />
  </header>
)

export default Header
