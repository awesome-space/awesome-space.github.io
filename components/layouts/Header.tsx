"use client"
import Link from "next/link";
import { useContext, useEffect } from "react";
import { ThemeContext } from "@/context/ThemeContext";
import { usePathname } from 'next/navigation' 
import ThemeProvider from "@/context/ThemeContext";
import { startSrollNProgress } from "@/utils/nprogress";
import Image from "next/image";
import day from "@/public/svg/day-mode.svg";
import night from "@/public/svg/night-mode.svg";

/**
 * 模式切换组件
 * @returns React.JSX.Element
 */
const DarkModeToggle = function () {
  const { theme, switchTheme }: any = useContext(ThemeContext);
  let [height, width] = [22, 22]
  return (
    <div onClick={switchTheme} className="cursor-pointer">
      <Image src={theme !== "light" ? day : night} width={width} height={height} alt=""></Image>
    </div>
  )
}

const Nav = ({ links, className = "" }: { links: Array<{ href: string, label: string }>, className?: string }) => {
  const pathname = usePathname()
  return (
    <nav className={`flex h-16 justify-between items-center ${className}`}>
      <Link href="/" className="font-bold">AwesomeSpace</Link>
      <div className="flex items-center gap-5">
        {
          links.map((link) => {
            return (
              <Link key={link.href} href={link.href} className={"cursor-pointer hover:text-blue-500 " + (pathname === link.href ? "text-blue-500 underline-offset-2" : "")}>
                {link.label}
              </Link>
            )
          })
        }
        <DarkModeToggle />
      </div>
    </nav>
  )
}


export default function Header({ links }: { links: Array<{ href: string, label: string }> }) {
  useEffect(() => {
    startSrollNProgress()
  }, [])

  return (
    <ThemeProvider>
      <header className="w-full select-none  py-4">
        <Nav links={links} />
      </header>
    </ThemeProvider>
  )
}