const formatDate = (date: string) => date.substring(0, 10)

const formatReadingTime = (readingMinutes: number) => {
  return readingMinutes > 1
    ? `${readingMinutes} minutes read`
    : `${readingMinutes} minute read`
}

export { formatDate, formatReadingTime }
