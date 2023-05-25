const sharedTitleClasses = 'text-slate-800 dark:text-slate-100'

const sharedParagraphClasses = 'text-slate-700 dark:text-slate-300 max-w-prose'

const sharedMenuClasses =
  'bg-slate-800 dark:bg-slate-100 w-full h-[2px] origin-left transition-all duration-200 ease-in'

const styling = {
  headings: {
    xl: `${sharedTitleClasses} text-3xl md:text-4xl`,
    lg: `${sharedTitleClasses} text-2xl md:text-3xl`,
    normal: `${sharedTitleClasses} text-xl md:text-2xl`,
    small: `${sharedTitleClasses} text-small md:text-lg`,
  },
  paragraphs: {
    normal: `${sharedParagraphClasses} text-base md:text-lg`,
    small: `${sharedParagraphClasses} text-sm md:text-base`,
    xsmall: `${sharedParagraphClasses} text-xs md:text-sm`,
  },
}

type HeadingStyling = keyof typeof styling.headings
type ParagraphStyling = keyof typeof styling.paragraphs

export { sharedMenuClasses, styling }

export type { HeadingStyling, ParagraphStyling }
