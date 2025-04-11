import fs from 'fs'
import path from 'path'
import { getSortedPostsData } from '@/lib/posts'
import ResourceList from '@/components/ResourceList'
import ArticleList from '@/components/ArticleList'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'GitBase - 开源动态网站 CMS，无需数据库',
  description: '基于 Next.js、Tailwind 和 Shadcn/UI 的网站，使用 GitHub API 进行内容管理，无需数据库即可实现动态更新。',
}

export default function Home() {
  const resourcesPath = path.join(process.cwd(), 'data', 'json', 'resources.json')
  const resources = JSON.parse(fs.readFileSync(resourcesPath, 'utf8'))
  const allPostsData = getSortedPostsData().slice(0, 6)

  return (
    <div className="container mx-auto py-12 space-y-16">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
          GitBase
        </h1>
        <h2 className="text-2xl tracking-tighter sm:text-3xl md:text-3xl lg:text-3xl">
          开源动态网站 CMS，无需数据库
        </h2>
        <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
          GitBase 是一个动态、无数据库的网站，基于 Next.js、Tailwind CSS 和 Shadcn/UI 构建，通过 GitHub API 实现内容管理和无缝更新。
        </p>
      </section>

      <ResourceList resources={resources} />
      <ArticleList articles={allPostsData} />
    </div>
  )
}
