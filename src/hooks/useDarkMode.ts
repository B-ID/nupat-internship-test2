import {useState, useEffect} from 'react'

export function useDarkMode() {
    const [isDarkMode, setIsDarkMode] = useState(false)

    useEffect(() => {
       
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark').matches)) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }, [isDarkMode])

    const toggleDarkMode = () => setIsDarkMode(prevMode => !prevMode)

    return {isDarkMode, toggleDarkMode}
}