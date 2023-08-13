// deno-lint-ignore-file no-explicit-any
import type { Block } from 'utils/notion.ts'

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

const copyToClipboard = (text: string): Promise<void> => {
  return window.navigator.clipboard.writeText(text)
}

const truncateText = (text: string, numOfChars = 100): string => {
  return text.length > numOfChars ? text.substring(0, numOfChars) + '...' : text
}

const slugify = (str: string): string => {
  return str
    .toLowerCase()
    .replace(/\s+|\//g, '-') // Replace white spaces and slashes with -
    .replace(/[^\w\-]+/g, '') // Remove all non-word chars
    .replace(/\-\-+/g, '-') // Replace multiple - with single -
    .replace(/^-+/, '') // Trim - from start of text
    .replace(/-+$/, '') // Trim - from end of text
}

const extractHeadings = (blocks: Block[]): string[] => {
  return blocks
    .filter((block) => {
      const regexp = /^heading_\d+$/

      return regexp.test(block.type)
    }).flatMap((block: any) => {
      const { type } = block

      return block[type].rich_text.map((item: any) => {
        return item.plain_text
      })
    })
}

export {
  calculateIconLeftPosition,
  calculateIconTransition,
  copyToClipboard,
  extractHeadings,
  formatReadingTime,
  slugify,
  truncateText,
}
