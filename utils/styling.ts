const sharedTitleClasses = 'black dark:gray-100'

const sharedParagraphClasses = 'black dark:gray-300'

const sharedMenuClasses =
  'bg(black dark:gray-100) w-full h-[2px] origin-left transition-all duration-200 ease-in'

const styling = {
  headings: {
    xl: `text(${sharedTitleClasses} 3xl md:4xl)`,
    lg: `text(${sharedTitleClasses} 2xl md:3xl)`,
    normal: `text(${sharedTitleClasses} xl md:2xl)`,
    small: `text(${sharedTitleClasses} small md:lg)`,
  },
  paragraphs: {
    normal: `text(${sharedParagraphClasses} base md:lg)`,
    small: `text(${sharedParagraphClasses} sm md:base)`,
    xsmall: `text(${sharedParagraphClasses} xs md:sm)`,
  },
}

type HeadingStyling = Record<keyof typeof styling.headings, string>
type ParagraphStyling = Record<keyof typeof styling.paragraphs, string>

export { sharedMenuClasses, styling }

export type { HeadingStyling, ParagraphStyling }
