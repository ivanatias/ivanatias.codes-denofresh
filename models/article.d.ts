interface BlogArticle {
  currentPost: CurrentPost
  nextPost: OtherPost | null
  previousPost: OtherPost | null
}

interface CurrentPost {
  _id: string
  articleBody: Block[]
  articleTitle: string
  coverImage: CoverImage
  excerpt: string
  publishDate: string
  slug: Slug
  socialShareImage: Image
}

type OtherPost = {
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
  asset: ImageAsset
}

interface ImageAsset {
  url: string
}

interface Block {
  _key: string
  _type: string
  children?: Child[]
  markDefs?: MarkDef[]
  style?: string
  level?: number
  listItem?: string
  altText?: string
  caption?: string
  image?: ArticleImage
  code?: Code
}

interface Code {
  _type: string
  code: string
  filename: string
  language: string
}

interface ArticleAsset {
  _ref: string
  _type: string
}

interface ArticleImage {
  _type: string
  asset: ArticleAsset
}

interface MarkDef {
  _key: string
  _type: string
  href: string
  isExternal: boolean
}

interface Child {
  _key: string
  _type: string
  marks: string[][]
  text: string
}

interface ArticleReadingTime extends Pick<CurrentPost, 'articleTitle'> {
  estimatedReadingTime: number
  estimatedWordCount: number
  numberOfCharacters: number
}

export type {
  ArticleImage,
  ArticleReadingTime,
  Block,
  BlogArticle,
  CurrentPost,
}
