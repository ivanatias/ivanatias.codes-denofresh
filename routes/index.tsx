import type { RouteContext } from '$fresh/server.ts'
import type { ComponentChildren } from 'preact'
import { asset } from '$fresh/runtime.ts'
import Wrapper from 'components/layout/wrapper.tsx'
import Section from 'components/layout/section.tsx'
import Title from 'components/layout/title.tsx'
import Paragraph from 'components/layout/paragraph.tsx'
import Link from 'components/link.tsx'
import WorkCard from 'components/work-card.tsx'
import PackageCard from 'components/package-card.tsx'
import ArticleCard from 'components/article-card.tsx'
import SkillsList from 'components/skills.tsx'
import Biography from 'components/biography.tsx'
import HeadTag from 'components/head-tag.tsx'
import { DB_TYPES, queryDatabase } from 'lib/notion.ts'
import {
  type BlogArticleEntry,
  extractArticleMetadata,
  extractProjectMetadata,
  extractPublishedPackageMetadata,
  type PageObjectResponse,
  type ProjectArticleEntry,
  type PublishedPackageEntry,
} from 'utils/notion.ts'

const About = () => (
  <Section>
    <Title titleTag='h2' titleClass='lg'>
      <span class='block text-center md:text-left'>Know more about me</span>
    </Title>
    <div class='flex flex-col md:flex-row items-center gap-8'>
      <img
        src='/profile-pic.webp'
        alt='Ivan Atias, Front-end Engineer and UI Designer'
        class='rounded-full w-[240px] h-[240px]'
        width='240'
        height='240'
      />
      <Paragraph>
        Hola! I&apos;m a Venezuelan Systems Engineer working as a Front-end
        Engineer and UI Designer. I thrive on creating sleek, minimalistic
        designs that are both visually stunning and user-friendly. When it comes
        to code, I firmly believe in keeping things clean and scalable - because
        who has time for spaghetti code anyway? Whether I'm designing or coding,
        my goal is always to create something that's not only beautiful but also
        functional. So, if you&apos;re looking for someone who&apos;s passionate
        about design and development (and can whip up an arepa like
        nobody&apos;s business), look no further!
      </Paragraph>
    </div>
    <Biography />
  </Section>
)

interface HomeSectionProps {
  sectionTitle: string
  children: ComponentChildren
}

const HomeSection = ({ children, sectionTitle }: HomeSectionProps) => (
  <Section>
    <Title titleTag='h2' titleClass='lg'>
      {sectionTitle}
    </Title>
    {children}
  </Section>
)

interface WorksProps {
  works: ProjectArticleEntry[]
}

const Works = ({ works }: WorksProps) => (
  <HomeSection sectionTitle='Personal projects'>
    <ul class='grid grid-cols-1 sm:grid-cols-2 gap-8'>
      {works.map((work) => (
        <li key={work.id}>
          <WorkCard {...work} />
        </li>
      ))}
    </ul>
  </HomeSection>
)

interface PackagesProps {
  packages: PublishedPackageEntry[]
}

const Packages = ({ packages }: PackagesProps) => (
  <HomeSection sectionTitle='Published packages'>
    <ul class='flex flex-col gap-4'>
      {packages.map((p) => (
        <li key={p.id}>
          <PackageCard {...p} />
        </li>
      ))}
    </ul>
  </HomeSection>
)

const Skills = () => (
  <HomeSection sectionTitle='Skills'>
    <div class='flex flex-col gap-6'>
      <Paragraph>
        These are some of the technologies and tools I&apos;m comfortable with:
      </Paragraph>
      <SkillsList />
    </div>
  </HomeSection>
)

interface LatestArticlesProps {
  latestArticles: BlogArticleEntry[]
}

const LatestArticles = ({ latestArticles }: LatestArticlesProps) => (
  <HomeSection sectionTitle='Latest articles'>
    <div class='flex flex-col gap-4'>
      <ul class='grid grid-cols-1 sm:grid-cols-2 sm:gap-6 gap-8'>
        {latestArticles.map((article) => (
          <li key={article.id}>
            <ArticleCard {...article} />
          </li>
        ))}
      </ul>
      <div class='mt-3'>
        <Link href='/blog'>
          Read all articles →
        </Link>
      </div>
    </div>
  </HomeSection>
)

const Home = async (_req: Request, _ctx: RouteContext) => {
  const [projectsDB, packagesDB, blogDB] = await Promise.all([
    queryDatabase(DB_TYPES.PROJECTS),
    queryDatabase(DB_TYPES.PACKAGES),
    queryDatabase(DB_TYPES.BLOG),
  ])

  const projectsPages = projectsDB.results as PageObjectResponse[]
  const packagesPages = packagesDB.results as PageObjectResponse[]
  const latestArticlesPages = blogDB.results as PageObjectResponse[]

  const projects = projectsPages.map((page) => extractProjectMetadata(page))
  const packages = packagesPages.map((page) =>
    extractPublishedPackageMetadata(page)
  )
  const latestArticles = latestArticlesPages.slice(0, 2).map((page) =>
    extractArticleMetadata(page)
  )

  return (
    <>
      <HeadTag
        linkTags={[
          { rel: 'preload', href: asset('/profile-pic.webp'), as: 'image' },
        ]}
      />
      <Wrapper>
        <Section className='grid grid-cols-1 gap-16'>
          <About />
          <Works works={projects} />
          <Packages packages={packages} />
          <Skills />
          <LatestArticles latestArticles={latestArticles} />
        </Section>
      </Wrapper>
    </>
  )
}

export default Home
