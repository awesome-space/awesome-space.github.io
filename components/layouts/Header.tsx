"use client";
import Link from "next/link";
import { useState, useContext, useEffect } from "react";
import ThemeProvider, { ThemeContext } from "@components/ThemeProvider";
import { usePathname } from "next/navigation";
import { startSrollNProgress } from "@utils/nprogress";
import Image from "next/image";
import day from "@public/svg/day-mode.svg";
import night from "@public/svg/night-mode.svg";
import AuthProvider from "@components/AuthProvider";
/**
 * 模式切换组件
 * @returns React.JSX.Element
 */
const DarkModeToggle = function () {
  const { theme, switchTheme }: any = useContext(ThemeContext);
  let [height, width] = [22, 22];
  return (
    <div onClick={switchTheme} className="cursor-pointer">
      <Image
        src={theme !== "light" ? day : night}
        width={width}
        height={height}
        alt=""
      ></Image>
    </div>
  );
};

export default function Header({
  links,
}: {
  links: Array<{ href: string; label: string }>;
}) {
  useEffect(() => {
    startSrollNProgress();
  }, []);
  const pathname = usePathname();

  const session = null;

  return (
    <ThemeProvider>
      <nav className={"navbar"}>
        <div className="flex justify-between py-2">
          <Link href="/" className="font-bold">
            {"He's PersonSite"}
          </Link>
          {/* 菜单列表 */}
          <div className="sm:flex hidden text-small gap-7">
            {links.map((link) => {
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={
                    "cursor-pointer hover:text-blue-500 " + pathname ===
                    link.href
                      ? "text-blue-500 underline-offset-2"
                      : ""
                  }
                >
                  {link.label}
                </Link>
              );
            })}
            <DarkModeToggle></DarkModeToggle>
          </div>
        </div>
      </nav>
    </ThemeProvider>
  );
}
