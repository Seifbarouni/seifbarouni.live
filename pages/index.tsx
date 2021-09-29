import Head from 'next/head'

import Container from './components/Container'
import RecentProjects from './components/RecentProjects'

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Seif Barouni - Developer</title>
      </Head>
      <div className="flex flex-col xl:px-96 lg:px-72 md:px-16 justify-center items-start">
        <h1 className="text-3xl md:text-5xl text-white font-bold pt-6">
          Hey, I'm Seif Barouni
        </h1>
        <h2 className="text-gray-400 pt-4 ml-0.5 md:w-11/12 mb-16">
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
        <h1 className="text-3xl md:text-4xl text-white font-semibold">
          My recent projects
        </h1>
        <div className="md:w-11/12 w-full pt-4">
          <RecentProjects />
        </div>
        <h1 className="text-3xl md:text-4xl text-white font-semibold">
          Work experience
        </h1>
        <p className="text-gray-400 mb-16 pt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
          officiis? Similique officia repellat error, nihil molestiae
          cupiditate? Totam impedit fugit ullam, eligendi doloribus, modi
          recusandae porro blanditiis nulla excepturi amet?
        </p>
      </div>
    </Container>
  )
}
