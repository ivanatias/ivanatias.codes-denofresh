const DEVELOPMENT = 'development'
const ENV = Deno.env.get('ENV') ?? DEVELOPMENT
const NOTION_SECRET = Deno.env.get('NOTION_SECRET')
const BLOG_DB = Deno.env.get('NOTION_BLOG_DB_ID')
const PROJECTS_DB = Deno.env.get('NOTION_PROJECTS_DB_ID')
const CONTRIBUTIONS_DB = Deno.env.get('NOTION_CONTRIBUTIONS_DB_ID')
const PACKAGES_DB = Deno.env.get('NOTION_PACKAGES_DB_ID')

export {
  BLOG_DB,
  CONTRIBUTIONS_DB,
  DEVELOPMENT,
  ENV,
  NOTION_SECRET,
  PACKAGES_DB,
  PROJECTS_DB,
}
