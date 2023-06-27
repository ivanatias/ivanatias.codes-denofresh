import { useSignal } from '@preact/signals'
import { MenuButton, MenuPopup } from 'components/menu.tsx'

const MobileMenu = () => {
  const isActive = useSignal(false)

  const toggleMenu = () => {
    isActive.value = !isActive.value
  }

  return (
    <div class='md:hidden'>
      <MenuButton isActive={isActive} toggleMenu={toggleMenu} />
      {isActive.value && <MenuPopup />}
    </div>
  )
}

export default MobileMenu
