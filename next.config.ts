import path from 'path'
import type { NextConfig } from 'next'

const REPO_NAME = 'blog-cms' // 这里已经为您填好了仓库名

const nextConfig: NextConfig = {
 output: 'export',
 trailingSlash: true,
 basePath: `/${REPO_NAME}`,
 assetPrefix: `/${REPO_NAME}/`,
 images: {
  unoptimized: true,
  remotePatterns: [
   { protocol: 'https', hostname: 'avatars.githubusercontent.com' },
   { protocol: 'https', hostname: '**.githubusercontent.com' },
  ],
 },
 outputFileTracingRoot: path.join(__dirname),
}

export default nextConfig