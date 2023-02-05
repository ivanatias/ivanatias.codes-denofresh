interface Blog {
  _id: string
  articleTitle: string
  coverImage: CoverImage
  excerpt: string
  publishDate: string
  slug: Slug
}

interface Slug {
  _type: string
  current: string
}

interface CoverImage {
  altText: string
  image: Image
}

interface Image {
  asset: Asset
}

interface Asset {
  url: string
}

export { Blog }
