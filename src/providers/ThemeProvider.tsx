import React, { createContext } from "react"
import useDarkMode from "../hooks/useDarkMode"

type Props = {
  children: React.ReactNode
}

export const ThemeContext = createContext({
  theme: `light`,
  toggleTheme: () => {
    //
  },
})

export const ThemeProvider = ({ children }: Props) => {
  const providerValue = useDarkMode()

  return <ThemeContext.Provider value={providerValue}>{children}</ThemeContext.Provider>
}
