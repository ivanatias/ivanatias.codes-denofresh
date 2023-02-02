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
		normal: `text(${sharedParagraphClasses} base 2xl:lg)`,
		small: `text(${sharedParagraphClasses} sm 2xl:base)`,
		xsmall: `text(${sharedParagraphClasses} xs 2xl:sm)`,
	},
	menu: {
		firstLineActive: `${sharedMenuClasses} rotate-45`,
		secondLineActive: `${sharedMenuClasses} opacity-0`,
		thirdLineActive: `${sharedMenuClasses} -rotate-45`,
	},
}

export { styling }
