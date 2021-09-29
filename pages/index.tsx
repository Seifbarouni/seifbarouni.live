import Head from 'next/head'
import { Container } from './components/Container'

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Seif Barouni - Developer</title>
      </Head>
      <div className="flex flex-col xl:px-96 lg:px-72 md:px-16 justify-center items-start">
        <h1 className="text-3xl md:text-5xl text-white font-semibold pt-6">
          Hey, I'm Seif Barouni
        </h1>
        <h2 className="text-gray-400 pt-4 ml-0.5 md:w-11/12 mb-16">
          I'm a computer science student and a web developer. I love creating
          new things with technology. I'm currently learning mobile development
          using
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
      </div>
    </Container>
  )
}
