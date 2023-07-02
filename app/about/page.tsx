import Image from "next/image"
import WeChat from "@/public/img/we-chat.jpg"

export default function About() {
  return <div className="flex justify-center">
    <Image src={WeChat} width={256} height={512} alt="WeChat"></Image>
  </div>
}