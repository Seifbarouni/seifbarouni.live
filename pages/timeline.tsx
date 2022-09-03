import Head from 'next/head'

import Layout from '../components/shared/Layout'
import FullTimeline from '../components/timeline/FullTimeline'

export default function timeline() {
  return (
    <Layout selected="timeline">
      <Head>
        <title>Seif Barouni - Developer</title>
      </Head>
      <div className="flex flex-col  xl:px-72 md:px-16 justify-center">
        <h1 className="text-3xl md:text-5xl dark:text-white text-black font-bold pt-6 2xl:px-24">
          My timeline
        </h1>
        <FullTimeline />
      </div>
    </Layout>
  )
}
