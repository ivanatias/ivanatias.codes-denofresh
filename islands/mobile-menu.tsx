import { useState } from 'preact/hooks'
import { MenuButton, MenuPopup } from 'components/menu.tsx'

const MobileMenu = () => {
  const [isActive, setIsActive] = useState(false)

  const toggleMenu = () => setIsActive((prev) => !prev)

  return (
    <div class='md:hidden'>
      <MenuButton isActive={isActive} toggleMenu={toggleMenu} />
      {isActive && <MenuPopup />}
    </div>
  )
}

export default MobileMenu
