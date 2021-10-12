import Head from 'next/head'

import Layout from '../components/shared/Layout'
import Education from '../components/home/Education'
import RecentProjects from '../components/home/RecentProjects'
import WorkExperience from '../components/home/WorkExperience'

export default function Home() {
  return (
    <Layout selected="home">
      <Head>
        <title>Seif Barouni - Developer</title>
      </Head>
      <div className="flex flex-col  xl:px-72 md:px-16 justify-center">
        <h1 className="text-3xl md:text-5xl dark:text-white text-black font-bold pt-6">
          Hi, I'm Seif Barouni
        </h1>
        <h2 className="text-gray-600 dark:text-gray-400 pt-4 ml-0.5 md:w-11/12 mb-16">
          I'm a computer science student and a full stack web developer. I'm
          currently interested in learning more about compilers and transpilers.
          I'm also open for work if you need a web app.
        </h2>
        <h1 className="text-3xl md:text-4xl dark:text-white text-black font-bold">
          My recent projects
        </h1>
        <div className="md:w-11/12 w-full pt-4">
          <RecentProjects />
        </div>
        <h1 className="text-3xl md:text-4xl dark:text-white text-black font-bold">
          Work experience
        </h1>
        <WorkExperience />
        <h1 className="text-3xl md:text-4xl dark:text-white text-black font-bold">
          Education
        </h1>
        <Education />
      </div>
    </Layout>
  )
}
