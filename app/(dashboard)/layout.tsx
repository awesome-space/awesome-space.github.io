import "nprogress/nprogress.css"
import "@/public/fonts/iconfont.css"
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

/**
 * 页面元数据
 */
export const metadata = {
  title: 'Site',
  description: 'Site',
}

/**
 * 网站的根组件布局
 * @param param0 子组件
 * @returns React.JSX.Element
 */
export default function RootLayout({ children, }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <body className={` dark:bg-black dark:text-white flex ease-linear duration-500 h-full scroll ${inter.className}`}>
          {children}
      </body>
    </html>
  )
}
