const biographyQuery = () => {
  const query = `*[_type == "biography"] | order(_createdAt desc) {
    _id,
    year,
    description
  }`

  return query
}

const worksQuery = () => {
  const query = `*[_type == "work"] | order(_createdAt asc) {
    _id,
    title,
    overview,
    slug,
    thumbNail {
    asset -> {
    url
    }
  }
}`

  return query
}

const workQuery = (slug: string) => {
  const query = `*[_type == "work" && slug.current == "${slug}"] {
    _id,
    title,
    projectUrl,
    githubUrl,
    description,
    slug,
    thumbNail {
      asset -> {
        url
      }
    },
  stack[] {
    tech,
    _key  
  },
  additionalImages[] {
    asset -> {
      url,
      _id  
    }   
  } 
}[0]`

  return query
}

const blogQuery = () => {
  const query = `*[_type == "blog"] | order(_createdAt desc) {
    _id,
    slug,
    excerpt,
    articleTitle,
    publishDate,
    coverImage {
      altText,
      image {
        asset -> {
          url
        }  
      }
    } 
  }`

  return query
}

const blogPostQuery = (slug: string) => {
  const query = `*[_type == "blog" && slug.current == "${slug}"] {
    "currentPost": {
      _id,
      slug,
      excerpt,
      articleBody,
      articleTitle,
      publishDate,
      socialShareImage {
        asset -> {
          url
        }
      },
      coverImage {
        altText,
        image {
          asset -> {
            url
          }  
        }
      } 
   },
   "previousPost": *[_type == "blog" && ^.publishDate > publishDate]| order(publishDate desc)[0] {
      slug
   },
   "nextPost": *[_type == "blog" && ^.publishDate < publishDate] | order(publishDate asc)[0] {
      slug
   }
  }[0]`

  return query
}

const blogPostReadingTimeQuery = (slug: string) => {
  const query = `*[_type == "blog" && slug.current == "${slug}"] {
    articleTitle,
    "numberOfCharacters": length(pt::text(articleBody)),
    "estimatedWordCount": round(length(pt::text(articleBody)) / 5),
    // Words per minute: 180
    "estimatedReadingTime": round(length(pt::text(articleBody)) / 5 / 180 )
  }[0]`

  return query
}

export {
  biographyQuery,
  blogPostQuery,
  blogPostReadingTimeQuery,
  blogQuery,
  workQuery,
  worksQuery,
}
