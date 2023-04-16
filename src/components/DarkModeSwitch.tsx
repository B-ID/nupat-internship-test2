import React from 'react'
import {useTheme} from 'next-themes'

type Props = {}

export default function DarkModeSwitch({}: Props) {
    const {systemTheme, theme, setTheme} = useTheme()

    const currentTheme = theme === "system" ? systemTheme : theme

  return (
    <div className='flex gap-2 px-2 rounded bg-fuchsia-400'>
        <button onClick={() => setTheme("light")}>Light</button>
        <button onClick={() => setTheme("dark")
        } 
            >dark</button>
    </div>
  )
}