import ArticleList from "@/components/blog/article/List";
/**
 * 博客页面
 * @returns JSX.Element
 */


export const metadata = {
  title: 'Articles|AwesomeSpace',
  description: 'AwesomeSpace',
}

export default function BlogIndex() {
  return (
    <div className="flex flex-col gap-4">
      <ArticleList />
    </div>
  )
}