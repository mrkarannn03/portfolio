"use client"

import { createContext, useContext, useEffect, useState } from "react"

type ThemeContextValue = {
  dark: boolean
  toggle: () => void
}

const ThemeContext = createContext<ThemeContextValue>({
  dark: false,
  toggle: () => {},
})

export function useTheme() {
  return useContext(ThemeContext)
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [dark, setDark] = useState(false)

  // Sync initial state from the class set by the anti-flash script.
  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"))
  }, [])

  function toggle() {
    setDark((prev) => {
      const next = !prev
      const root = document.documentElement
      root.classList.toggle("dark", next)
      root.classList.toggle("light", !next)
      try {
        localStorage.setItem("theme", next ? "dark" : "light")
      } catch {
        /* ignore */
      }
      return next
    })
  }

  return <ThemeContext.Provider value={{ dark, toggle }}>{children}</ThemeContext.Provider>
}
