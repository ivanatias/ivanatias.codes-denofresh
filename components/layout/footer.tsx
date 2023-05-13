import type { ComponentChildren } from 'preact'
import Title from 'components/layout/title.tsx'
import Paragraph from 'components/layout/paragraph.tsx'
import Social from 'components/social.tsx'
import Link from 'components/link.tsx'

interface SmallTextProps {
  children: ComponentChildren
}

const SmallText = ({ children }: SmallTextProps) => (
  <small class='text(xs gray-800 dark:gray-400 2xl:sm) font-semibold'>
    {children}
  </small>
)

const Footer = () => {
  const currentYear = new Date().getUTCFullYear()

  return (
    <footer class='flex(& col) items-center justify-between pt-12 pb-6'>
      <div class='flex(& col) gap-5 max-w-3xl w-full mx-auto px(4 md:5)'>
        <Title titleTag='h2' titleClass='lg'>
          Feel free to reach out to me!
        </Title>
        <Paragraph>
          Contact me through my email to talk about web development, design or
          any other subject.
        </Paragraph>
        <a
          class='text(base black dark:gray-300 2xl:lg) font-bold'
          href='mailto:ivan.d.atias@gmail.com'
        >
          ivan.d.atias@gmail.com
        </a>
      </div>
      <div class='flex(& col) items-center gap-1 mt-7'>
        <SmallText>
          © {currentYear} Ivan Atias
        </SmallText>
        <SmallText>
          Made with
          <Link
            href='https://fresh.deno.dev/'
            className='ml-1 underline'
            isExternal={true}
          >
            Deno Fresh
          </Link>
        </SmallText>
      </div>
      <div class='mt-5'>
        <Social />
      </div>
    </footer>
  )
}

export default Footer
