import Head from 'next/head'
import Link from 'next/link'
import Post from '../../components/blog/Post'

import Layout from '../../components/shared/Layout'
import { getAllDocs } from '../../lib/api'

interface Post {
  dt: [
    {
      slug: string
      meta: {
        title: string
        description: string
        date: string
      }
    }
  ]
}

export default function Blogs({ dt }: Post) {
  return (
    <Layout selected="blog">
      <Head>
        <title>Seif Barouni - Developer</title>
      </Head>
      <div className="flex flex-col  xl:px-72 md:px-16 justify-center">
        <h1 className="text-3xl md:text-5xl dark:text-white text-black font-bold pt-6 2xl:px-24">
          Blog
        </h1>
        <p className="dark:text-gray-500 text-gray-600 text-sm md:text-base 2xl:px-24 w-5/6 pt-4">
          These are my notes when I'm learning new concepts and technologies.
        </p>
        <Post dt={dt} />
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const docs = getAllDocs()
  const dt = docs.map((el) => {
    return { slug: el?.slug, meta: el?.meta }
  })
  return {
    props: {
      dt,
    },
  }
}
