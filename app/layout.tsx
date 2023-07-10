import "nprogress/nprogress.css";
import "@styles/globals.css";
import "@public/fonts/iconfont.css";
import "@icon-park/react/styles/index.css";

/**
 * 页面元数据
 */
export const metadata = {
  title: "He's PersonSite",
  description: "He's PersonSite",
};

/**
 * 网站的根组件布局
 * @param param0 子组件
 * @returns React.JSX.Element
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className="h-full">{children}</body>
    </html>
  );
}
