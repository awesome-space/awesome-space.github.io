"use client";
import Link from "next/link";
import { useState, useContext, useEffect } from "react";
import ThemeProvider, { ThemeContext } from "@components/ThemeProvider";
import { usePathname } from "next/navigation";
import { startSrollNProgress } from "@utils/nprogress";
import Image from "next/image";
import day from "@public/svg/day-mode.svg";
import night from "@public/svg/night-mode.svg";

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

const DesktopNav = ({
  links,
}: {
  links: Array<{ href: string; label: string }>;
}) => {
  const pathname = usePathname();
  return (
    <nav className={"sm:flex hidden  h-16 justify-between items-center"}>
      <Link href="/" className="font-bold">
        He's PersonSite
      </Link>
      <div className="flex items-center gap-5">
        {links.map((link) => {
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`cursor-pointer hover:text-blue-500 ${
                pathname === link.href ? "text-blue-500 underline-offset-2" : ""
              }`}
            >
              {link.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

const MobileNav = ({
  links,
}: {
  links: Array<{ href: string; label: string }>;
}) => {
  const pathname = usePathname();

  const [toggleDropdown, setToggleDropdown] = useState(false);

  return (
    <nav className={"sm:hidden flex h-16 justify-between items-center px-4"}>
      <Link href="/" className="font-bold">
        He's PersonSite
      </Link>
      <div className="relative">
        <button onClick={() => setToggleDropdown((prev) => !prev)}>==</button>
        {toggleDropdown && (
          <div className="flex flex-col absolute top-5 flex-shrink-0">
            {links.map((link) => {
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={
                    "w-32 block cursor-pointer hover:text-blue-500 " +
                    (pathname === link.href
                      ? "text-blue-500 underline-offset-2"
                      : "")
                  }
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </nav>
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

  return (
    <ThemeProvider>
      <header className="w-full select-none  py-4">
        <DesktopNav links={links} />
        <MobileNav links={links} />
      </header>
    </ThemeProvider>
  );
}
