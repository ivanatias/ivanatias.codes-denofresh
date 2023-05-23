import type { AdditionalImage } from 'models/works.d.ts'
import type { Block } from 'models/article.d.ts'
import { getImageDimensions } from 'sanity/asset-utils'

const formatDate = (date: string) => date.substring(0, 10)

const formatReadingTime = (readingMinutes: number) => {
  const noun = readingMinutes > 1 ? 'minutes' : 'minute'
  return `${readingMinutes} ${noun} read`
}

const calculateIconTransition = (position: number, multiplicator: number) => {
  return `top 0.2s ${position * multiplicator}ms, left 0.2s ${
    position * multiplicator
  }ms, opacity 0.2s ${position * multiplicator}ms`
}

const calculateIconLeftPosition = (position: number, multiplicator: number) => {
  return `calc(${
    (-1) ** position * Math.ceil(position / 2) * multiplicator
  }px + 6px)`
}

const getImagesWithDimensions = (images: AdditionalImage[]) => {
  return images.map(({ asset }) => ({
    id: asset._id,
    url: asset.url,
    dimensions: getImageDimensions(asset),
  }))
}

const mapToLanguageLogo = (language: string): string | undefined => {
  const languages: Record<string, string> = {
    jsx: '/images/reactjs.svg',
    tsx: '/images/reactjs.svg',
    javascript: '/images/javascript.svg',
    js: '/images/javascript.svg',
    typescript: '/images/typescript.svg',
    ts: '/images/typescript.svg',
    css: '/images/css.svg',
    sass: '/images/sass.svg',
  }

  return languages[language]
}

const copyToClipboard = (text: string) => {
  return window.navigator.clipboard.writeText(text)
}

const truncateText = (text: string, numOfChars = 100) => {
  return text.length > numOfChars ? text.substring(0, numOfChars) + '...' : text
}

const slugify = (str: string) => {
  return str
    .toLowerCase()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/[^\w\-]+/g, '') // Remove all non-word chars
    .replace(/\-\-+/g, '-') // Replace multiple - with single -
    .replace(/^-+/, '') // Trim - from start of text
    .replace(/-+$/, '') // Trim - from end of text
}

const extractHeadingsFromBlocks = (blocks: Block[]) => {
  return blocks.map((block) => {
    const { _type, children, style } = block

    if (
      _type === 'block' && children !== undefined &&
      style !== undefined && /^h\d$/.test(style)
    ) {
      return children[0].text
    }

    return ''
  }).filter(Boolean)
}

export {
  calculateIconLeftPosition,
  calculateIconTransition,
  copyToClipboard,
  extractHeadingsFromBlocks,
  formatDate,
  formatReadingTime,
  getImagesWithDimensions,
  mapToLanguageLogo,
  slugify,
  truncateText,
}
