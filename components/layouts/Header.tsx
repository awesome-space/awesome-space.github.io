"use client";
import Link from "next/link";
import { useState, useContext, useEffect } from "react";
import { ThemeContext } from "@components/ThemeProvider";
import { usePathname } from "next/navigation";
import { startSrollNProgress } from "@utils/nprogress";
import Image from "next/image";
import day from "@public/svg/day-mode.svg";
import night from "@public/svg/night-mode.svg";
import { HamburgerButton } from "@icon-park/react";
import { mergeClasses } from "@utils/classnames";

export default function Header({
  links,
}: {
  links: Array<{ href: string; label: string }>;
}) {
  const { theme, switchTheme }: any = useContext(ThemeContext);

  // track small screen menu dropdown
  const [toggleDropdown, setToggleDropdown] = useState(false);

  const [height, width] = [22, 22];
  const pathname = usePathname();

  useEffect(() => {
    startSrollNProgress();
  }, []);

  return (
    <nav className={"navbar"}>
      <div className="flex justify-between py-4">
        <Link href="/" className="font-bold">
          {"He's PersonSite"}
        </Link>
        <div className="sm:flex hidden text-small gap-7">
          {/* 菜单列表 */}
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={mergeClasses("cursor-pointer hover:text-blue-500", {
                "text-blue-500 underline-offset-2": pathname === link.href,
              })}
            >
              {link.label}
            </Link>
          ))}
          {/* 模式切换 */}
          <div onClick={switchTheme} className="cursor-pointer">
            <Image
              src={theme !== "light" ? day : night}
              width={width}
              height={height}
              alt=""
            ></Image>
          </div>
        </div>
        <div className="sm:hidden flex relative">
          <HamburgerButton
            theme="outline"
            size="24"
            onClick={() => setToggleDropdown((prev) => !prev)}
            fill={theme === "light" ? "#000000" : "#ffffff"}
          />
          {/* 菜单列表 */}
          {toggleDropdown && (
            <div className="absolute top-7 right-0 flex flex-col shrink-0 w-8">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={mergeClasses(
                    "cursor-pointer hover:text-blue-500 block",
                    {
                      "text-blue-500 underline-offset-2":
                        pathname === link.href,
                    }
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
