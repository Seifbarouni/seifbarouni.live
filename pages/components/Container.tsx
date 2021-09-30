import Link from 'next/link'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import Footer from './Footer'

interface ContainerProps {
  children: React.ReactChildren
  selected: string
}

const Container: React.FC<ContainerProps> = ({ children, selected }) => {
  const [isMounted, setMounted] = useState(false)
  const { resolvedTheme, setTheme } = useTheme()

  useEffect(() => setMounted(true), [])
  return (
    <div className="pt-12 flex flex-col">
      <nav className="p-6 flex  lg:px-72 md:px-14 justify-between  items-center w-full sticky top-0 dark:bg-eerie-black bg-white">
        <div className="dark:text-white text-black flex space-x-8">
          <Link href="/">
            <div
              className={`${
                selected === 'home' &&
                'border-b dark:border-white border-black pb-1'
              } cursor-pointer`}
            >
              Home
            </div>
          </Link>
          <Link href="/timeline">
            <div
              className={`${
                selected === 'timeline' &&
                'border-b  dark:border-white border-black pb-1'
              } cursor-pointer`}
            >
              Timeline
            </div>
          </Link>
        </div>

        {isMounted && (
          <div
            className={` ${
              resolvedTheme === 'dark' ? 'bg-gray-800' : 'bg-gray-200'
            } p-2 rounded-sm cursor-pointer active:transform  active:scale-110 transition duration-150  ease-out`}
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
        )}
      </nav>
      <main className="flex flex-col justify-center px-8">{children}</main>
      <Footer />
    </div>
  )
}

export default Container
