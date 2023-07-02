/** @type {import('next').NextConfig} */
const nextConfig = {
	output: "export",
	distDir: "dist",
  dynamicParams: true,
	experimental: {
		mdxRs: true,
	},
	images: { unoptimized: true }
}

const withMDX = require('@next/mdx')();
module.exports = withMDX(nextConfig)
