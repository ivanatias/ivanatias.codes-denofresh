import { AdditionalImage } from 'models/works.d.ts'
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

const mapToLanguageLogo = (language: string) => {
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

  return languages[language] || undefined
}

export {
  calculateIconLeftPosition,
  calculateIconTransition,
  formatDate,
  formatReadingTime,
  getImagesWithDimensions,
  mapToLanguageLogo,
}
