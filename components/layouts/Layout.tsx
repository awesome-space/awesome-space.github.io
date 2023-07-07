"use client";
import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";
import BackTop from "@/components/back-top/BackTop";
import { usePathname } from "next/navigation";
import ThemeProvider from "@components/ThemeProvider";
const links: Array<{ href: string; label: string }> = [
  {
    href: "/",
    label: "主页",
  },
  {
    href: "/blog",
    label: "博客",
  },
  {
    href: "/project",
    label: "项目",
  },
  {
    href: "/tools",
    label: "工具",
  },
  {
    href: "/website-nav",
    label: "网站导航",
  },
  {
    href: "/about",
    label: "关于",
  },
];

/**
 * 网址布局组件
 * @param { children: React.ReactNode }  param0
 * @returns
 */
export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return (
    <ThemeProvider>
      <div className="xl:container xl:px-80 lg:px-40 w-full mx-auto flex flex-col justify-between flex-1">
        <BackTop></BackTop>
        {pathname.startsWith("/blog/share") ? <></> : <Header links={links} />}
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
