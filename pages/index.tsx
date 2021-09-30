import Head from 'next/head'

import Container from './components/Container'
import Education from './components/Education'
import RecentProjects from './components/RecentProjects'
import WorkExperience from './components/WorkExperience'

export default function Home() {
  return (
    <Container selected="home">
      <Head>
        <title>Seif Barouni - Developer</title>
      </Head>
      <div className="flex flex-col  lg:px-72 md:px-16 justify-center">
        <h1 className="text-3xl md:text-5xl dark:text-white text-black font-bold pt-6">
          Hi, I'm Seif Barouni
        </h1>
        <h2 className="text-gray-600 dark:text-gray-400 pt-4 ml-0.5 md:w-11/12 mb-16">
          I'm a computer science student and a web developer from Tunisia 🇹🇳. I
          love creating new things with technology. I'm currently trying to
          improve my english and learning mobile development using
          <a
            className="underline text-blue-500 ml-1"
            target="_blank"
            href="https://reactnative.dev/"
          >
            React Native.
          </a>
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
    </Container>
  )
}
