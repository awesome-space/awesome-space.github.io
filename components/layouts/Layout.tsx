"use client"
import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";
import BackTop from "@/components/back-top/BackTop";
import { links } from "@/config/site";
import { usePathname } from "next/navigation";


/**
 * 网址布局组件
 * @param { children: React.ReactNode }  param0
 * @returns 
 */
export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return (
    <div className="md:container w-full mx-auto flex flex-col justify-between flex-1 lg:px-80">
      <BackTop></BackTop>
      {
        pathname.startsWith("/blog/share") ? <></> : <Header links={links} />
      }
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  )
}