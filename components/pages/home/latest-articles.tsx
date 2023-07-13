import Title from 'components/layout/title.tsx'
import Section from 'components/layout/section.tsx'
import ArticleCard from 'components/article-card.tsx'
import Link from 'components/link.tsx'
import type { Blog } from 'models/blog.ts'

interface Props {
  latestArticles: Blog[]
}

const LatestArticles = ({ latestArticles }: Props) => (
  <Section>
    <Title titleTag='h2' titleClass='lg'>
      Latest blog articles
    </Title>
    <div class='flex flex-col gap-4'>
      <div class='grid grid-cols-1 sm:grid-cols-2 sm:gap-6 gap-8'>
        {latestArticles.map(({ _id, ...item }) => (
          <ArticleCard
            key={_id}
            {...item}
          />
        ))}
      </div>
      <div class='mt-3'>
        <Link href='/blog'>
          Read all articles →
        </Link>
      </div>
    </div>
  </Section>
)

export default LatestArticles
