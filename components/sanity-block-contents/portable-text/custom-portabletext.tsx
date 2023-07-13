import PortableText from 'portabletext'
import type { CurrentPost } from 'models/article.ts'
import { serializers } from 'components/sanity-block-contents/portable-text/serializers.tsx'

type Props = Pick<CurrentPost, 'articleBody'>

const CustomPortableText = ({ articleBody }: Props) => (
  <PortableText content={articleBody} serializers={serializers} />
)

export default CustomPortableText
