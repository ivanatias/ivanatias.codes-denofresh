// deno-lint-ignore-file no-explicit-any
import { Client, isFullBlock } from 'notion'
import { slugify } from 'utils/helpers.ts'
import { BUILD, DEVELOPMENT, ENV } from 'constants/env.ts'
import type { Block, PageObjectResponse } from 'utils/notion.ts'

const NOTION_SECRET = Deno.env.get('NOTION_SECRET')
const BLOG_DB = Deno.env.get('NOTION_BLOG_DB_ID')
const PROJECTS_DB = Deno.env.get('NOTION_PROJECTS_DB_ID')
const CONTRIBUTIONS_DB = Deno.env.get('NOTION_CONTRIBUTIONS_DB_ID')
const PACKAGES_DB = Deno.env.get('NOTION_PACKAGES_DB_ID')

const allEnvSet = NOTION_SECRET !== undefined && BLOG_DB !== undefined &&
  PROJECTS_DB !== undefined && CONTRIBUTIONS_DB !== undefined &&
  PACKAGES_DB !== undefined

if (!allEnvSet && ENV !== BUILD) {
  throw new Error(
    `All Notion environment variables must be set, check for NOTION_SECRET, NOTION_BLOG_DB_ID, 
    NOTION_PROJECTS_DB_ID, NOTION_CONTRIBUTIONS_DB_ID 
    and NOTION_PACKAGES_DB_ID`,
  )
}

const DB_TYPES = {
  BLOG: 'blog',
  PROJECTS: 'projects',
  CONTRIBUTIONS: 'contributions',
  PACKAGES: 'packages',
} as const

type DatabaseType = typeof DB_TYPES[keyof typeof DB_TYPES]

const databases: Record<DatabaseType, string> = {
  blog: BLOG_DB as string,
  projects: PROJECTS_DB as string,
  contributions: CONTRIBUTIONS_DB as string,
  packages: PACKAGES_DB as string,
} as const

const notionClient = new Client({
  auth: NOTION_SECRET,
})

const queryDatabase = (database: DatabaseType) => {
  const options: {
    database_id: string
    filter?: {
      property: string
      checkbox: {
        equals: boolean
      }
    }
  } = {
    database_id: databases[database],
  }

  if (ENV !== DEVELOPMENT) {
    options.filter = {
      property: 'Published',
      checkbox: {
        equals: true,
      },
    }
  }

  return notionClient.databases.query(options)
}

const getBlocks = (id: string) => {
  return notionClient.blocks.children.list({
    block_id: id,
  })
}

const getPageBlocks = async (pageId: string): Promise<Block[]> => {
  const blocks = await getBlocks(pageId)

  const blocksWithChildren = await Promise.all(
    blocks.results
      .filter((block) => {
        return isFullBlock(block) && block.has_children
      })
      .map(async (block) => ({
        id: block.id,
        children: await getBlocks(block.id),
      })),
  )

  const updatedBlocks: Block[] = []

  /*
    Both forEach and for...of approaches have the advantage of avoiding an extra iteration
    to transform the blocks into lists if needed, as oppossed to the map + reduce approach.
    for...of loop seems to be more performant in this case.
  */
  for (const block of blocks.results as any) {
    const { type, has_children, id } = block
    const shouldAddChildren = has_children && block[type].children === undefined

    if (shouldAddChildren) {
      /*
        if a Block is suppossed to have children, then include those
        into the children property for easy/convenient access later on.
        Since all blocks with children have been retrieved previously and stored
        in an array of objects consisting of the block's id and its children,
        the next step is finding the children of the parent block using the id
         as a matcher.
      */
      const children = blocksWithChildren.find((b) => {
        return b.id === id
      })?.children

      block[type].children = children
    }

    const isListItem = type === 'bulleted_list_item' ||
      type === 'numbered_list_item'

    /*
      If block is not a list item, just push it to the updated blocks array
      and continue with the next block. Otherwise, it's necessary to check
      if this is the first list item on the list, which means the list parent block should be
      created (bulleted list or numbered list) and add the list item(s) as its child.
    */
    if (!isListItem) {
      updatedBlocks.push(block)
      continue
    }

    const lastItem = updatedBlocks[updatedBlocks.length - 1] as any

    const isList = lastItem?.type === 'bulleted_list' ||
      lastItem?.type === 'numbered_list'

    if (isList) {
      lastItem[lastItem.type].children.results.push(block)
    } else {
      const listType = type === 'bulleted_list_item'
        ? 'bulleted_list'
        : 'numbered_list'

      const newItem = {
        object: 'block',
        has_children: true,
        type: listType,
        [listType]: {
          children: {
            results: [block],
          },
        },
      } as Block

      updatedBlocks.push(newItem)
    }
  }

  return updatedBlocks
}

const getPreviousAndNextPage = (pages: any[], actualPageIndex: number) => {
  // Below solution needs improvement

  /*
   Since results are ordered in an ascending order (newer entries first),
   the previous page of a given page is the page after the current page,
   and the next page of a given page is the page before the current page
  */
  const prevPageTitle: string | undefined = pages[actualPageIndex + 1]
    ?.properties?.Title?.title[0]?.plain_text

  const nextPageTitle: string | undefined = pages[actualPageIndex - 1]
    ?.properties?.Title?.title[0]?.plain_text

  return {
    prevPageTitle,
    nextPageTitle,
  }
}

type NotionPageResults = {
  foundPage: PageObjectResponse
  content: Block[]
  prevPageTitle?: string
  nextPageTitle?: string
}

const getNotionPageContent = async (
  slug: string,
  type: DatabaseType,
): Promise<NotionPageResults | null> => {
  const start = performance.now()
  const { results } = await queryDatabase(type)

  // Fix typings for this later on
  const foundPage = results.find((r: any) => {
    return slugify(r.properties.Title.title[0].plain_text) === slug
  })

  if (foundPage === undefined) return null

  const [blocks, foundPageIndex] = await Promise.all([
    getPageBlocks(foundPage.id),
    Promise.resolve(results.indexOf(foundPage)),
  ])

  const { nextPageTitle, prevPageTitle } = getPreviousAndNextPage(
    results,
    foundPageIndex,
  )

  const elapsed = performance.now() - start

  console.info(`Notion page content retrieved in ${elapsed.toFixed(2)}ms`)

  return {
    foundPage: foundPage as PageObjectResponse,
    content: blocks,
    prevPageTitle,
    nextPageTitle,
  }
}

export {
  type Block,
  DB_TYPES,
  getBlocks,
  getNotionPageContent,
  type NotionPageResults,
  queryDatabase,
}
