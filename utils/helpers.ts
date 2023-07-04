import type { AdditionalImage } from 'models/works.d.ts'
import type { Block } from 'models/article.d.ts'
import {
  getImageDimensions,
  type SanityImageDimensions,
} from 'sanity/asset-utils'

const formatDate = (date: string): string => date.substring(0, 10)

const formatReadingTime = (readingMinutes: number): string => {
  const noun = readingMinutes > 1 ? 'minutes' : 'minute'
  return `${readingMinutes} ${noun} read`
}

const calculateIconTransition = (
  position: number,
  multiplicator: number,
): string => {
  return `top 0.2s ${position * multiplicator}ms, left 0.2s ${
    position * multiplicator
  }ms, opacity 0.2s ${position * multiplicator}ms`
}

const calculateIconLeftPosition = (
  position: number,
  multiplicator: number,
): string => {
  return `calc(${
    (-1) ** position * Math.ceil(position / 2) * multiplicator
  }px + 6px)`
}

type ImageWithDimensions = {
  id: string
  url: string
  dimensions: SanityImageDimensions
}

const getImagesWithDimensions = (
  images: AdditionalImage[],
): ImageWithDimensions[] => {
  return images.map(({ asset }) => ({
    id: asset._id,
    url: asset.url,
    dimensions: getImageDimensions(asset),
  }))
}

const copyToClipboard = (text: string): Promise<void> => {
  return window.navigator.clipboard.writeText(text)
}

const truncateText = (text: string, numOfChars = 100): string => {
  return text.length > numOfChars ? text.substring(0, numOfChars) + '...' : text
}

const slugify = (str: string): string => {
  return str
    .toLowerCase()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/[^\w\-]+/g, '') // Remove all non-word chars
    .replace(/\-\-+/g, '-') // Replace multiple - with single -
    .replace(/^-+/, '') // Trim - from start of text
    .replace(/-+$/, '') // Trim - from end of text
}

const extractHeadingsFromBlocks = (blocks: Block[]): string[] => {
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
  slugify,
  truncateText,
}
