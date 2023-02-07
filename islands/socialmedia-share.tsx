import { useState } from 'preact/hooks'
import ShareIcon from 'components/social-share/share-icon.tsx'
import ShareButton from 'components/social-share/share-button.tsx'
import { socialShare } from 'constants/socials.ts'

interface Props {
  slug: string
}

const Share = ({ slug }: Props) => {
  const [shareButtonActive, setShareButtonActive] = useState(false)

  const toggleShareButton = () => setShareButtonActive((prev) => !prev)

  return (
    <div class='flex items-center justify-center my-4'>
      <div class='relative'>
        <ShareButton
          isActive={shareButtonActive}
          toggleShareButton={toggleShareButton}
        />
        {socialShare.map(({ outlet, label, icon }, index) => (
          <ShareIcon
            key={label + index}
            slug={slug}
            isActive={shareButtonActive}
            toggleShareButton={toggleShareButton}
            outlet={outlet}
            label={label}
            icon={icon}
            position={index}
          />
        ))}
      </div>
    </div>
  )
}

export default Share
