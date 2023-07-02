import request from "@/utils/request";
import Image from 'next/image';
import wechat404 from "@/public/img/wechat-404-.png"
import MdView from '@/components/md-view/MdView';


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



const ArticleView = ({ articleInfo }: { articleInfo: Article }) => {
  return (
    <article className="flex flex-col justify-center mx-auto w-full">
      <h1 className="text-2xl font-bold mb-2">{articleInfo.title}</h1>
      <hr className="my-4" />
      <MdView mdText={articleInfo.md_text}></MdView>
    </article>
  )
}


const ArticleNotFound = () => {
  return (
    <div className="w-full py-16 flex justify-center items-center">
      <Image src={wechat404} width={400} height={400} className="w-lg" alt="" />
    </div>
  )
}


export default async function Posts({ params }: { params: { uuid: string } }) {
  const { code, data: articleInfo = null }: { code: number, data: Article | null } = await request.get(`https://blogapi.hewenyao.top/api/article/${params.uuid}`);
  return (
    articleInfo == null ? <ArticleNotFound /> : <ArticleView articleInfo={articleInfo}  />
  )
}



export async function generateStaticParams() {
  const { data: { list = [] } } = await request.get("https://blogapi.hewenyao.top/api/article/list?page_num=1&page_size=10");
  return list.map((post: Article) => ({
    uuid: post.id,
  }))
}