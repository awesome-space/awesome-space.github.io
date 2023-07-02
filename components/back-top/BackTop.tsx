"use client"
import { useEffect, useState } from "react"
import upBtn from "@/public/svg/up-btn.svg";
import Image from "next/image";

export default function BackTop() {
  const [scrollY_, setScrollY_] = useState(0);
  useEffect(() => {
    window.addEventListener('scroll', () => setScrollY_(window.scrollY));
  })
  return (
    (scrollY_ > 300) ? <div className="fixed right-5 bottom-5 cursor-pointer" onClick={() => window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })}> <Image src={upBtn} width={32} height={32} alt=""></Image></div> : <></>
  )
}