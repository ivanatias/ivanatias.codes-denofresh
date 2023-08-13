// deno-lint-ignore-file no-explicit-any
import type {
  BlockObjectResponse,
  BulletedListItemBlockObjectResponse,
  NumberedListItemBlockObjectResponse,
  PageObjectResponse,
  QueryDatabaseResponse,
  RichTextItemResponse,
  TextRichTextItemResponse,
  ToggleBlockObjectResponse,
} from 'notion/build/src/api-endpoints'
import { formatReadingTime } from 'utils/helpers.ts'

// Utility types for database entries
type DatabaseResult = Extract<
  QueryDatabaseResponse['results'][number],
  {
    properties: Record<string, unknown>
  }
>

type PropertyValueMap = DatabaseResult['properties']
type PropertyValue = PropertyValueMap[string]
type PropertyValueType = PropertyValue['type']

type ExtractedPropertyValue<PropType extends PropertyValueType> = Extract<
  PropertyValue,
  { type: PropType }
>

type PropertyValueTitle = ExtractedPropertyValue<'title'>
type PropertyValueRichText = ExtractedPropertyValue<'rich_text'>
type PropertyValueMultiSelect = ExtractedPropertyValue<'multi_select'>
type PropertyValueCheckbox = ExtractedPropertyValue<'checkbox'>
type PropertyValueNumber = ExtractedPropertyValue<'number'>
type PropertyValueDate = ExtractedPropertyValue<'date'>
type PropertyValueFiles = ExtractedPropertyValue<'files'>
type PropertyValueUrl = ExtractedPropertyValue<'url'>

// Types that resemble the databases' columns
type GenericDBItemProperties = {
  Title: PropertyValueTitle
  Description: PropertyValueRichText
  'Published at': PropertyValueDate
  Published: PropertyValueCheckbox
}

type BlogArticleDBItem = DatabaseResult & {
  properties: GenericDBItemProperties & {
    Tags: PropertyValueMultiSelect
    'Cover image': PropertyValueFiles
    'Image attribution': PropertyValueRichText
    'Reading time mins': PropertyValueNumber
    'OG image': PropertyValueFiles
  }
}

type ProjectArticleDBItem = DatabaseResult & {
  properties: GenericDBItemProperties & {
    'Cover image': PropertyValueFiles
  }
}

type ContributionArticleDBItem = DatabaseResult & {
  properties: GenericDBItemProperties & {
    'Cover image': PropertyValueFiles
    'GitHub Repo': PropertyValueUrl
  }
}

type PublishedPackageDBItem = DatabaseResult & {
  properties: GenericDBItemProperties & {
    'GitHub Repo': PropertyValueUrl
  }
}

// Adapted types (as used) for database entries
interface GenericDBEntry {
  id: string
  title: string
  description: string
  published: boolean
}

interface BlogArticleEntry extends GenericDBEntry {
  publishedAt: string
  coverImageUrl: string
  readingTime: string
  socialCardImage: string
  imageAttribution: {
    content: string
    link: string
  }
  tags: string[]
}

interface ProjectArticleEntry extends GenericDBEntry {
  coverImageUrl: string
}

interface ContributionArticleEntry extends GenericDBEntry {
  publishedAt: string
  coverImageUrl: string
  githubRepoUrl: string
}

interface PublishedPackageEntry extends GenericDBEntry {
  githubRepoUrl: string
}

// Types for Blocks
type NumberedListObjectResponse = {
  children: {
    results: NumberedListItemBlockObjectResponse[]
  }
}

type BulletedListObjectResponse = {
  children: {
    results: BulletedListItemBlockObjectResponse[]
  }
}

type ToggleObjectResponse = ToggleBlockObjectResponse['toggle'] & {
  children: {
    object: 'list'
    results: Block[]
  }
}

/*
  This type includes Blocks with and without children.
  Blocks with children are: Numbered Lists, Bulleted Lists and Toggles.
  If the block is none of these three, then it will be any other type of non-children
  Notion block such as List items, Paragraphs, Headings, Code blocks, etc.
*/
type Block =
  | {
    object: 'block'
    id: string
    has_children: boolean
    type: 'numbered_list'
    numbered_list: NumberedListObjectResponse
  }
  | {
    object: 'block'
    id: string
    has_children: boolean
    type: 'bulleted_list'
    bulleted_list: BulletedListObjectResponse
  }
  | {
    toggle: ToggleObjectResponse
  } & Omit<ToggleBlockObjectResponse, 'toggle'>
  | Exclude<BlockObjectResponse, ToggleBlockObjectResponse>

const getCoverImageUrl = (
  item: BlogArticleDBItem | ProjectArticleDBItem,
): string => {
  const [file] = item.properties['Cover image'].files as any
  return (file.external?.url ?? file.file.url) as string
}

const getSocialCardImageUrl = (item: BlogArticleDBItem): string => {
  const [file] = item.properties['OG image'].files as any
  return (file.external?.url ?? file.file.url) as string
}

const extractArticleMetadata = (
  response: PageObjectResponse,
): BlogArticleEntry => {
  const page = response as BlogArticleDBItem

  const [attribution] = page.properties['Image attribution']
    .rich_text as RichTextItemResponse[]

  const tags = page.properties.Tags.multi_select

  let imageAttribution: Record<'content' | 'link', string> = {
    content: 'Unknown',
    link: '',
  }

  if (attribution.type === 'text') {
    imageAttribution = {
      content: attribution.text.content,
      link: attribution.text.link?.url ?? '',
    }
  }

  const readingTime = formatReadingTime(
    page.properties['Reading time mins'].number as number,
  )

  return {
    id: page.id,
    title:
      (page.properties.Title.title as RichTextItemResponse[])[0].plain_text,
    description:
      (page.properties.Description.rich_text as RichTextItemResponse[])[0]
        .plain_text,
    publishedAt: page.properties['Published at'].date?.start ?? '',
    published: page.properties.Published.checkbox === true,
    tags: Array.isArray(tags) ? tags.map((tag) => tag.name) : [],
    coverImageUrl: getCoverImageUrl(page),
    socialCardImage: getSocialCardImageUrl(page),
    imageAttribution,
    readingTime,
  }
}

const extractProjectMetadata = (
  response: PageObjectResponse,
): ProjectArticleEntry => {
  const page = response as ProjectArticleDBItem

  const coverImageUrl = getCoverImageUrl(page)

  return {
    id: page.id,
    title:
      (page.properties.Title.title as RichTextItemResponse[])[0].plain_text,
    description:
      (page.properties.Description.rich_text as RichTextItemResponse[])[0]
        .plain_text,
    published: page.properties.Published.checkbox === true,
    coverImageUrl,
  }
}

const extractContributionMetadata = (
  response: PageObjectResponse,
): ContributionArticleEntry => {
  const page = response as ContributionArticleDBItem

  return {
    id: page.id,
    title:
      (page.properties.Title.title as RichTextItemResponse[])[0].plain_text,
    description:
      (page.properties.Description.rich_text as RichTextItemResponse[])[0]
        .plain_text,
    publishedAt: page.properties['Published at'].date?.start ?? '',
    published: page.properties.Published.checkbox === true,
    coverImageUrl: getCoverImageUrl(page),
    githubRepoUrl: page.properties['GitHub Repo'].url as string,
  }
}

const extractPublishedPackageMetadata = (
  response: PageObjectResponse,
): PublishedPackageEntry => {
  const page = response as PublishedPackageDBItem

  return {
    id: page.id,
    title:
      (page.properties.Title.title as RichTextItemResponse[])[0].plain_text,
    description:
      (page.properties.Description.rich_text as RichTextItemResponse[])[0]
        .plain_text,
    published: page.properties.Published.checkbox === true,
    githubRepoUrl: page.properties['GitHub Repo'].url as string,
  }
}

export {
  type Block,
  type BlogArticleEntry,
  type ContributionArticleEntry,
  extractArticleMetadata,
  extractContributionMetadata,
  extractProjectMetadata,
  extractPublishedPackageMetadata,
  type PageObjectResponse,
  type ProjectArticleEntry,
  type PublishedPackageEntry,
  type TextRichTextItemResponse,
}
