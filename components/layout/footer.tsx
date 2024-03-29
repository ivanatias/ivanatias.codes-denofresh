import type { ComponentChildren } from 'preact'
import Title from 'components/layout/title.tsx'
import Paragraph from 'components/layout/paragraph.tsx'
import Social from 'components/social.tsx'
import Link from 'components/link.tsx'

interface SmallTextProps {
  children: ComponentChildren
}

const SmallText = ({ children }: SmallTextProps) => (
  <small class='text-xs text-slate-800 dark:text-slate-400 2xl:text-sm font-semibold'>
    {children}
  </small>
)

const Footer = () => {
  const currentYear = new Date().getUTCFullYear()

  return (
    <footer class='flex flex-col items-center justify-between pt-20 pb-6'>
      <div class='flex flex-col gap-5 max-w-3xl w-full mx-auto px-4 md:px-5'>
        <Title titleTag='h2' titleClass='lg'>
          Feel free to reach out to me!
        </Title>
        <Paragraph>
          Contact me through my email to talk about web development, design or
          any other subject.
        </Paragraph>
        <a
          class='text-base text-slate-800 dark:text-slate-300 2xl:text-lg font-bold'
          href='mailto:ivan.d.atias@gmail.com'
        >
          ivan.d.atias@gmail.com
        </a>
      </div>
      <div class='flex flex-col items-center gap-1 mt-7'>
        <SmallText>
          © {currentYear} Ivan Atias
        </SmallText>
        <SmallText>
          Made with
          <Link
            href='https://fresh.deno.dev/'
            className='ml-1 underline'
            isExternal
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
