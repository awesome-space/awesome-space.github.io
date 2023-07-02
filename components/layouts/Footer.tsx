import Link from "next/link"

export default function Footer() {
  return (
    <footer className="h-16 flex justify-center flex-shrink-0 items-center gap-4">
      <div>@2023 AwesomeSpace. All rights reserved. </div>
      <div><Link href="https://beian.miit.gov.cn/" target="_blank">冀ICP备2021021961号</Link></div>
    </footer>
  )
}