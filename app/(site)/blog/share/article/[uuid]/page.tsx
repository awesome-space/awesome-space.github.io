import request from "@/utils/request";
import MdView from "@/components/md-view/MdView";

interface Article {
  id: string,
  cover: string,
  created_at: string,
  description: string,
  title: string,
  updated_at: string,
  view_num: number,
  status: number,
  md_text: string
}


export default async function ShareArticle({ params }: { params: { uuid: string } }) {
  const { code, data: articleInfo }: { code: number, data: Article } = await request.get(`/article/${params.uuid}`)
  return (
    <article className="w-full py-16 flex flex-col justify-center">
      <h1 className="text-4xl font-bold mb-4 text-center">{articleInfo.title}</h1>
      <hr className="my-4" />
      <MdView mdText={articleInfo.md_text}></MdView>
    </article>
  )
}
