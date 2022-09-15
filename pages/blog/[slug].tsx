import Head from 'next/head'

import Layout from '../../components/shared/Layout'
import { getAllDocs, getDocBySlug } from '../../lib/api'
import markdownToHtml from '../../lib/markdownToHTML'

export default function Blog({ content, meta }: any) {
  return (
    <Layout selected="blog">
      <Head>
        <title>Seif Barouni - Developer</title>
      </Head>
      <div className="flex flex-col  xl:px-72 md:px-16 justify-center">
        <div className="2xl:ml-24 pt-8 text-gray-600 dark:text-gray-400">
          {meta.date}
        </div>
        <article
          className="pt-2 2xl:ml-24 prose md:prose-lg dark:prose-dark dark:md:prose-lg-dark w-full"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </Layout>
  )
}

interface ParamsType {
  params: {
    slug: string
  }
}

export async function getStaticProps({ params }: ParamsType) {
  const doc = getDocBySlug(params.slug)
  if (doc == null) {
    return {
      notFound: true,
    }
  }
  const content = await markdownToHtml(doc.content || '')
  return {
    props: {
      ...doc,
      content,
    },
  }
}

export async function getStaticPaths() {
  const docs = getAllDocs()
  return {
    paths: docs.map((doc) => {
      return {
        params: {
          slug: doc?.slug,
        },
      }
    }),
    fallback: 'blocking',
  }
}
