import { useSignal } from '@preact/signals'
import ShareIcon from 'components/social-share/share-icon.tsx'
import ShareButton from 'components/social-share/share-button.tsx'
import { SOCIAL_SHARE } from 'constants/socials.ts'

interface Props {
  slug: string
}

const Share = ({ slug }: Props) => {
  const isActive = useSignal(false)

  const toggleShareButton = () => {
    isActive.value = !isActive.value
  }

  console.log('re-rendered')

  return (
    <div class='flex items-center justify-center my-4'>
      <div class='relative'>
        <ShareButton
          isActive={isActive}
          toggleShareButton={toggleShareButton}
        />
        {SOCIAL_SHARE.map(({ outlet, label, icon }, index) => (
          <ShareIcon
            key={label + index}
            slug={slug}
            isActive={isActive}
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
