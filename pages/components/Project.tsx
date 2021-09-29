import React from 'react'

interface ProjectProps {
  link: string
  title: string
  stars: number
  description: string
  learned: string[]
}

const Project: React.FC<ProjectProps> = ({
  link,
  title,
  stars,
  description,
  learned,
}) => {
  return (
    <a
      href={link}
      target="_blank"
      className="border border-gray-700 border-opacity-50 rounded-sm p-3  cursor-pointer flex flex-col space-y-2"
    >
      <div className="flex items-center justify-between">
        <h1 className="text-white text-lg font-semibold">{title}</h1>
        <span className="flex items-center space-x-1 text-red-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <span>{stars}</span>
        </span>
      </div>
      <p className="text-gray-400 text-sm">{description}</p>
      <div>
        <span className="text-white font-semibold">- What I learned : </span>
        <span className="text-gray-400">{learned?.join(', ')}</span>
      </div>
    </a>
  )
}

export default Project
