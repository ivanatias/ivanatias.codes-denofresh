const BASE_URL_BLOG = 'https://www.ivanatias.codes/blog'

const socialShare = [
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

const socialLinks = [
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
	{
		path: 'https://instagram.com/ivanatias',
		icon: 'icon-instagram',
		name: 'Instagram',
	},
]

export { BASE_URL_BLOG, socialLinks, socialShare }
