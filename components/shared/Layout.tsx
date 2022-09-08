import Link from 'next/link'
import Head from 'next/head'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

import Footer from './Footer'
import logo from '../../public/favicon.svg'

interface LayoutProps {
  children: React.ReactNode
  selected: string
}

const Layout: React.FC<LayoutProps> = ({ children, selected }) => {
  const [isMounted, setMounted] = useState(false)
  const { resolvedTheme, setTheme } = useTheme()
  useEffect(() => {
    setMounted(true)
  }, [])
  return (
    <div className=" flex flex-col relative justify-center items-center">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Seif Barouni's personal website" />
        <meta property="og:title" content="Seif Barouni" key="ogtitle" />
        <meta
          property="og:description"
          content="Seif Barouni's personal website"
          key="ogdesc"
        />
        <meta property="og:image" content={logo} key="ogimage" />
      </Head>
      <nav className="p-8 flex  xl:px-72 md:px-16 justify-between items-center w-full sticky top-0 dark:bg-eerie-black bg-gray-100 z-50">
        <div className="dark:text-white text-black flex space-x-2">
          <Link href="/">
            <div
              className={`${
                selected === 'home'
                  ? 'dark:text-neutral-200'
                  : 'dark:text-neutral-500 text-neutral-500'
              } cursor-pointer hover:ease-in duration-150 dark:hover:bg-zinc-700 hover:bg-neutral-200 rounded-lg py-1 px-3 font-semibold dark:hover:text-neutral-200`}
            >
              Home
            </div>
          </Link>
          <Link href="/timeline">
            <div
              className={`${
                selected === 'timeline'
                  ? 'dark:text-neutral-200'
                  : 'dark:text-neutral-500 text-neutral-500'
              } cursor-pointer hover:ease-in duration-150 dark:hover:bg-zinc-700 hover:bg-neutral-200 rounded-lg py-1 px-3 font-semibold dark:hover:text-neutral-200`}
            >
              Timeline
            </div>
          </Link>
          <a href="#" className="sm:flex hidden">
            <div
              className={`${
                selected === 'blog'
                  ? 'dark:text-neutral-200'
                  : 'dark:text-neutral-500 text-neutral-500'
              } cursor-pointer hover:ease-in duration-150 dark:hover:bg-zinc-700 hover:bg-neutral-200 rounded-lg py-1 px-3 font-semibold dark:hover:text-neutral-200`}
            >
              Blog
            </div>
          </a>
          <a href="/cv.pdf" download>
            <div
              className={`${
                selected === 'blog'
                  ? 'dark:text-neutral-200'
                  : 'dark:text-neutral-500 text-neutral-500'
              } cursor-pointer hover:ease-in duration-150 dark:hover:bg-zinc-700 hover:bg-neutral-200 rounded-lg py-1 px-3 font-semibold dark:hover:text-neutral-200`}
            >
              CV
            </div>
          </a>
        </div>

        {isMounted && (
          <div className="flex space-x-2">
            <div
              className={` ${
                resolvedTheme === 'dark' ? 'bg-gray-800' : 'bg-gray-300'
              } p-2 rounded-lg cursor-pointer active:transform  active:scale-110 transition duration-150  ease-out`}
              onClick={() =>
                setTheme(`${resolvedTheme === 'dark' ? 'light' : 'dark'}`)
              }
            >
              {resolvedTheme === 'dark' ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 fill-current text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 fill-current text-gray-800"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              )}
            </div>
          </div>
        )}
      </nav>
      <div className="flex justify-center items-center">
        <main className=" px-8">{children}</main>
      </div>
      <div className="flex justify-center w-full">
        <Footer />
      </div>
    </div>
  )
}

export default Layout
