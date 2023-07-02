"use client"
import hljs from 'highlight.js';
import 'highlight.js/styles/github.css';
import { useEffect } from 'react';
import { ReactMarkdown } from "react-markdown/lib/react-markdown"


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


const Category = ({ className }: { className: string }) => {
  return (
    <div className={className}>
      目录
    </div>
  )
}


export default function MdView({ mdText }: { mdText: string }) {
  useEffect(() => {
    document.querySelectorAll('pre code').forEach((el: Element) => {
      hljs.highlightElement(el as HTMLPreElement);
    });
  })
  return (
    <div className="flex">
      <ReactMarkdown className="font-mono flex-1">{
        mdText
      }</ReactMarkdown>
    </div>
  )
}