const getBiographyQuery = () => {
  return `*[_type == "biography"] | order(_createdAt desc) {
    _id,
    year,
    description
  }`
}

const getWorksQuery = () => {
  return `*[_type == "work"] | order(_createdAt asc) {
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
}

const getWorkQuery = (slug: string) => {
  return `*[_type == "work" && slug.current == "${slug}"] {
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
}

const getBlogQuery = () => {
  return `*[_type == "blog"] | order(_createdAt desc) {
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
}

const getBlogPostQuery = (slug: string) => {
  return `*[_type == "blog" && slug.current == "${slug}"] {
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
}

const getBlogPostReadingTimeQuery = (slug: string) => {
  return `*[_type == "blog" && slug.current == "${slug}"] {
    articleTitle,
    "numberOfCharacters": length(pt::text(articleBody)),
    "estimatedWordCount": round(length(pt::text(articleBody)) / 5),
    // Words per minute: 180
    "estimatedReadingTime": round(length(pt::text(articleBody)) / 5 / 180 )
  }[0]`
}

const getPackagesQuery = () => {
  return `*[_type == "package"] | order(_createdAt desc) {
    _id,
    packageName,
    description,
    githubUrl,
  }`
}

export {
  getBiographyQuery,
  getBlogPostQuery,
  getBlogPostReadingTimeQuery,
  getBlogQuery,
  getPackagesQuery,
  getWorkQuery,
  getWorksQuery,
}
