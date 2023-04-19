import React, {ReactNode, useContext, useState, createContext} from 'react'

type Props = {
    children: ReactNode
}

export interface IMenuContext {
  openMenu: () => void
  closeMenu: () => void
  mobileMenu: boolean
}

// const MenuContext = createContext<IMenuContext | null>(null)
const MenuContext = createContext({} as IMenuContext)

export function useMenu() {
    return useContext(MenuContext)
}

export default function MenuProvider({children}: Props) {
  const [mobileMenu, setMobileMenu] = useState(false) 

  // Toggle mobile menu
   const openMenu = () => setMobileMenu(true)
   const closeMenu = () => setMobileMenu(false)



  const value = {
    openMenu,
    closeMenu,
    mobileMenu,
  }

  return (
    <MenuContext.Provider value={value}>
      {children}
    </MenuContext.Provider>
  )
}