const BASE_URL = 'https://ivanatias.dev'
const BASE_URL_BLOG = `${BASE_URL}/blog`

const SOCIAL_SHARE = [
  {
    outlet: 'https://www.facebook.com/sharer/sharer.php?u=',
    label: 'Facebook',
    icon: 'icon-facebookshare',
  },
  {
    outlet: 'https://www.linkedin.com/shareArticle?url=',
    label: 'LinkedIn',
    icon: 'icon-linkedinshare',
  },
  {
    outlet: 'https://twitter.com/intent/tweet?url=',
    label: 'Twitter',
    icon: 'icon-twittershare',
  },
]

const SOCIAL_LINKS = [
  {
    path: 'https://github.com/ivanatias',
    icon: 'icon-github',
    name: 'Github',
  },
  {
    path: 'https://www.linkedin.com/in/ivandatiasr/',
    icon: 'icon-linkedin',
    name: 'LinkedIn',
  },
  {
    path: 'https://stackoverflow.com/users/17195992/ivanatias',
    icon: 'icon-stackoverflow',
    name: 'Stack Overflow',
  },
]

export { BASE_URL, BASE_URL_BLOG, SOCIAL_LINKS, SOCIAL_SHARE }
