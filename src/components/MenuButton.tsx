import { useMenu } from '@/contexts/MenuContext'
import React from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

type Props = {}

export default function MenuButton({}: Props) {

    const {mobileMenu, openMenu, closeMenu} = useMenu()


  return (

          <div className="desktop:hidden">
            {!mobileMenu ? (
              <button onClick={openMenu}>
                <AiOutlineMenu
                  className="active:text-dashboard-active"
                  size={25}
                />
              </button>
            ) : (
              <button onClick={closeMenu}>
                <AiOutlineClose className="active:text-red-500" size={25} />
              </button>
            )}
          </div>
  )
}