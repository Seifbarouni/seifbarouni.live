import Link from 'next/link'
import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

import Footer from './Footer'
import MyTerminal from './MyTerminal'
import { useOutsideAlerter } from '../../utils/hooks/useOutsideAlerter'

interface LayoutProps {
  children: React.ReactNode
  selected: string
}

const Layout: React.FC<LayoutProps> = ({ children, selected }) => {
  const [isMounted, setMounted] = useState(false)
  const { resolvedTheme, setTheme } = useTheme()
  const { ref, isOpen, setOpen } = useOutsideAlerter(false)

  useEffect(() => setMounted(true), [])
  return (
    <div className=" flex flex-col relative">
      <nav className="p-8 flex  xl:px-72 md:px-14 justify-between items-center w-full sticky top-2 dark:bg-eerie-black bg-gray-100">
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
          <Link href="/articles">
            <div
              className={`${
                selected === 'articles' &&
                'border-b  dark:border-white border-black pb-1'
              } cursor-pointer`}
            >
              Articles
            </div>
          </Link>
        </div>

        {isMounted && (
          <div className="flex space-x-2">
            <div
              className={` ${
                resolvedTheme === 'dark' ? 'bg-gray-800' : 'bg-gray-300'
              } p-2 rounded-sm cursor-pointer active:transform  active:scale-110 transition duration-150  ease-out hidden sm:inline-flex`}
              onClick={() => setOpen(true)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-6 w-6  ${
                  resolvedTheme === 'dark' ? 'text-white' : 'text-gray-800'
                } `}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
            <div
              className={` ${
                resolvedTheme === 'dark' ? 'bg-gray-800' : 'bg-gray-300'
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
          </div>
        )}
      </nav>
      <main className="flex flex-col justify-center px-8">{children}</main>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.1 }}
          className="min-h-screen  fixed  left-0 top-0  flex justify-center items-center inset-0 z-50 "
        >
          <div className="absolute dark:bg-gray-800 bg-black opacity-60 inset-0 z-0"></div>
          <motion.div
            drag
            initial={{ y: 50 }}
            animate={{ y: 0 }}
            exit={{ y: 30 }}
            ref={ref}
            className="w-full max-w-2xl z-50 max-h-80 overflow-y-scroll scrollbar-none"
          >
            <MyTerminal setOpen={setOpen} />
          </motion.div>
        </motion.div>
      )}
      <Footer />
    </div>
  )
}

export default Layout
