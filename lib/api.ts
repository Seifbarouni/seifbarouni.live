import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

const docsDirectory = join(process.cwd(), 'docs')

export function getDocBySlug(slug: string) {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(docsDirectory, `${realSlug}.md`)
  try {
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)
    return { slug: realSlug, meta: data, content }
  } catch (error) {
    return null
  }
}

export function getAllDocs() {
  const slugs = fs.readdirSync(docsDirectory)
  const docs = slugs.map((slug) => getDocBySlug(slug))

  return docs
}
