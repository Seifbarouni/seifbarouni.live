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
      className="border-2 dark:border-gray-700 border-gray-300  rounded-md p-3  cursor-pointer flex flex-col space-y-2 shadow-sm"
    >
      <h1 className="dark:text-white text-black text-lg font-semibold">
        {title}
      </h1>
      <p className="dark:text-gray-400 text-gray-600 text-sm">{description}</p>
      <div>
        <span className="dark:text-white text-black font-semibold">
          - What I used :{' '}
        </span>
        <span className="dark:text-gray-400 text-gray-600">
          {used?.join(', ')}
        </span>
      </div>
    </a>
  )
}

export default Project
