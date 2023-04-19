import { useMenu } from '@/contexts/MenuContext'
import React from 'react'

type Props = {}

export default function Overlay({}: Props) {
    const {mobileMenu, closeMenu} = useMenu()
  return (
    <div 
    onClick={closeMenu}
    className={`fixed top-0 left-0 backdrop-blur-lg bg-black opacity-50 h-screen w-screen z-40 ${mobileMenu ? 'block' : 'hidden'}`} ></div>
  )
}