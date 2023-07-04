"use client"
import { useEffect, useRef } from "react"
import Typed from "typed.js";

/**
 * 网站主页
 * @returns JSX.Element
 */
export default function Home() {
  const welcome = useRef(null)
  useEffect(() => {
    // let content = "近来闲无事，恰为软红时。随坐危楼里，自怨思心摧。飞入数户白，闪尽大地黑。何必忧此际，可怜不须惜。";
    const typed = new Typed(welcome.current, {
      strings: ["Welcome To AwesomeSpace"],
      typeSpeed: 50,
      smartBackspace: true,
      loop: true,
      cursorChar: "__"
    });
    return () => typed.destroy();
  }, [])

  return (
    <div className="text-center">
      <span className="text-3xl" ref={welcome} />
    </div>
  )
}
