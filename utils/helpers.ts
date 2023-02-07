const formatDate = (date: string) => date.substring(0, 10)

const formatReadingTime = (readingMinutes: number) => {
  return readingMinutes > 1
    ? `${readingMinutes} minutes read`
    : `${readingMinutes} minute read`
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

export {
  calculateIconLeftPosition,
  calculateIconTransition,
  formatDate,
  formatReadingTime,
}
