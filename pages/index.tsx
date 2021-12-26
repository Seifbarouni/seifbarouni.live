import Head from 'next/head'
import Image from 'next/image'

import Layout from '../components/shared/Layout'
import Education from '../components/home/Education'
import RecentProjects from '../components/home/RecentProjects'
import WorkExperience from '../components/home/WorkExperience'
import TechStack from '../components/home/TechStack'

export default function Home() {
  return (
    <Layout selected="home">
      <Head>
        <title>Seif Barouni - Developer</title>
      </Head>
      <div className="flex flex-col  xl:px-72 md:px-16 justify-center">
        <div className="flex xl:flex-row flex-col xl:items-center">
          <div className="relative h-44 w-44 shadow-xl ring-2 rounded-lg dark:ring-gray-200 ring-gray-400 xl:mt-0 mt-2">
            <Image
              className="rounded-lg shadow-xl"
              src="/images/me.jpeg"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="flex flex-col xl:w-2/3 xl:ml-6 xl:mt-4">
            <h1 className="text-3xl md:text-5xl dark:text-white text-black font-bold pt-6">
              Hi, I'm Seif Barouni
            </h1>
            <h2 className="text-gray-600 dark:text-gray-400 pt-4 ml-0.5 md:w-11/12 mb-16">
              I'm a computer science student and a full stack web developer. I'm
              open for work if you need a web app. You can find my contact
              details{' '}
              <a
                href="#footer"
                className="text-blue-500 underline hover:cursor-pointer"
              >
                below.
              </a>
            </h2>
          </div>
        </div>
        <h1 className="text-3xl md:text-4xl dark:text-white text-black font-bold">
          My recent projects
        </h1>
        <div className="md:w-11/12 w-full pt-4">
          <RecentProjects />
        </div>
        <h1 className="text-3xl md:text-4xl dark:text-white text-black font-bold">
          Tech Stack I use
        </h1>
        <TechStack />
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
