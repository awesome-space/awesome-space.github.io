import React, { createContext, Dispatch, SetStateAction, useEffect, useState } from "react";
/**
 * 主题上下文类型
 */
export interface ThemeContextType {
  theme: string
  switchTheme: Dispatch<SetStateAction<string>>
}

export const ThemeContext = createContext({} as ThemeContextType)


/**
 * 切换 html 标签上的 class
 * @param theme 主题名称
 */
const switchHtmlClass = (theme: string) => {
  const html_classList = document.documentElement.classList
  theme === "dark" ? html_classList.add("dark") : html_classList.remove("dark")
}

/**
 * 主题上下文组件
 * @param param0 
 * @returns 
 */
export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const key: string = "theme"
  const [theme, setTheme] = useState("light")

  useEffect(() => {
    const theme = localStorage.getItem(key) || "light"
    switchHtmlClass(theme)
    setTheme(theme)
  }, []);

  const switchTheme = () => {
    setTheme(value => {
      value = value === "dark" ? "light" : "dark"
      switchHtmlClass(value)
      localStorage.setItem(key, value)
      return value
    })
  }
  return (
    <ThemeContext.Provider value={{ theme, switchTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
