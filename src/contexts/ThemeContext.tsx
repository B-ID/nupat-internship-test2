import { ReactNode } from 'react'
import { ThemeProvider } from 'next-themes'

type Props = {
    children: ReactNode
}

export default function ThemeContext({ children}: Props) {
  return (
    <ThemeProvider enableSystem={true} attribute='class'>
        {children}
        </ThemeProvider>
  )
}