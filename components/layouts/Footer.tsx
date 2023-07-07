import Link from "next/link";

/**
 * 网站底部
 *
 * @returns
 */
export default function Footer() {
  return (
    <footer className="footer flexStart">
      <div className="flex flex-col gap-4 justify-center items-center">
        <div>@2023 AwesomeSpace. All rights reserved. </div>
        <Link href="https://beian.miit.gov.cn/" target="_blank">
          冀ICP备2021021961号
        </Link>
      </div>
    </footer>
  );
}
