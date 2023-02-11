interface Work {
  _id: string
  overview: string
  slug: Slug
  thumbNail: Image
  title: string
}

interface Image {
  asset: Asset
}

interface Asset {
  url: string
}

interface Slug {
  _type: string
  current: string
}

interface AdditionalAsset extends Asset {
  _id: string
}

interface AdditionalImage {
  asset: AdditionalAsset
}

interface Stack {
  _key: string
  tech: string
}

interface WorkDetails extends Omit<Work, 'overview'> {
  projectUrl: string
  githubUrl: string
  description: string
  additionalImages: AdditionalImage[]
  stack: Stack[]
}

export { AdditionalImage, Stack, Work, WorkDetails }
