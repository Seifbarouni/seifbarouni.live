import { useState } from 'react'

interface ContainerProps {
  children: any
}

export const Container: React.FC<ContainerProps> = ({ children }) => {
  const [selected, setSelected] = useState('home')
  const [dark, setDark] = useState('dark')
  return (
    <div className="pt-12 flex flex-col">
      <nav className="p-6 flex  lg:px-72 md:px-12 justify-between  items-center w-full">
        <div
          className="bg-gray-800 p-2 rounded-xl hover:bg-gray-700 cursor-pointer active:transform  active:scale-110 transition duration-150  ease-out"
          onClick={() => setDark(`${dark === 'dark' ? 'light' : 'dark'}`)}
        >
          {dark === 'dark' ? (
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
              className="h-6 w-6 fill-current text-white"
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
        <div className="text-white flex space-x-8">
          <a
            href="#home"
            className={`${
              selected === 'home' && 'border-b pb-1'
            } cursor-pointer`}
            onClick={() => setSelected('home')}
          >
            Home
          </a>
          <a
            href="#projects"
            className={`${
              selected === 'projects' && 'border-b pb-1'
            } cursor-pointer`}
            onClick={() => setSelected('projects')}
          >
            Projects
          </a>
          <a
            href="#timeline"
            className={`${
              selected === 'timeline' && 'border-b pb-1'
            } cursor-pointer`}
            onClick={() => setSelected('timeline')}
          >
            Timeline
          </a>
        </div>
      </nav>
      <main className="flex flex-col justify-center px-8">
        {children}
        <footer></footer>
      </main>
    </div>
  )
}
