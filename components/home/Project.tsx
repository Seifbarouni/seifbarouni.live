interface ProjectProps {
  link: string
  title: string
  description: string
  used: string[]
}

const Project: React.FC<ProjectProps> = ({
  link,
  title,
  description,
  used,
}) => {
  return (
    <a
      href={link}
      target="_blank"
      className={`rounded-xl p-1.5 shadow-sm md:w-5/6 dark:bg-zinc-800 bg-gray-300`}
    >
      <div className="cursor-pointer flex flex-col space-y-2 dark:bg-eerie-black bg-gray-100 p-3 rounded-lg">
        <h1 className="dark:text-white text-black text-lg md:text-xl font-semibold">
          {title}
        </h1>
        <p className="dark:text-gray-400 text-gray-600 text-sm md:text-base">
          {description}
        </p>
        <div>
          <span className="dark:text-white text-black font-semibold">
            - What I used :{' '}
          </span>
          <span className="dark:text-gray-400 text-gray-600">
            {used?.join(', ')}
          </span>
        </div>
      </div>
    </a>
  )
}

export default Project
