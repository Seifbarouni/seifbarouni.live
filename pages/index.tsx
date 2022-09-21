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
        <div className="flex xl:flex-row flex-col xl:items-center justify-center xl:space-x-12">
          <div className="relative sm:h-36 sm:w-36 h-20 w-20 rounded-full  xl:mt-0 mt-2">
            <Image
              className="rounded-full"
              src="/images/me.jpeg"
              layout="fill"
              objectFit="cover"
              alt="me"
            />
          </div>
          <div className="flex flex-col xl:w-2/3 xl:ml-6 xl:mt-4">
            <h1 className="text-3xl 2xl:text-5xl dark:text-white text-black font-bold pt-6">
              Seif Barouni
            </h1>
            <h2 className="text-gray-600 dark:text-gray-400 pt-4 ml-0.5 md:w-2/3 mb-16">
              I'm a Software Developer, cloud enthusiast and problem solver from
              Tunisia. I'm currently Terraform. You can find
              my contact details{' '}
              <a
                href="#footer"
                className="text-blue-500 underline hover:cursor-pointer"
              >
                below.
              </a>
            </h2>
          </div>
        </div>
        <div className="2xl:px-24">
          <h1 className="text-3xl 2xl:text-4xl dark:text-white text-black font-bold">
            My recent projects
          </h1>
          <div className="md:w-11/12 w-full pt-4">
            <RecentProjects />
          </div>
          <h1 className="text-3xl 2xl:text-4xl dark:text-white text-black font-bold">
            Tech Stack I currently use <br />
            <span className="text-base text-gray-500 font-normal">
              (but I'm always exploring new technologies)
            </span>
          </h1>
          <TechStack />
          <h1 className="text-3xl 2xl:text-4xl dark:text-white text-black font-bold">
            Work experience
          </h1>
          <WorkExperience
            jobTitle="Software engineer - Part time"
            company="Creometry"
            startDate="May 2022"
            endDate="August 2022"
            whatIlearned={'Cloud technologies, kubernetes, rancher, vue, nuxt'}
            location="Tunis, Tunisia"
          />
          <WorkExperience
            jobTitle="Software development intern"
            company="OnePack"
            startDate="Jul 2021"
            endDate="Sep 2021"
            whatIlearned={
              'Redux, react-redux, redux thunks, antdesign, express'
            }
            location="Tunis, Tunisia"
          />
          <h1 className="text-3xl 2xl:text-4xl dark:text-white text-black font-bold">
            Education
          </h1>
          <Education />
        </div>
      </div>
    </Layout>
  )
}
