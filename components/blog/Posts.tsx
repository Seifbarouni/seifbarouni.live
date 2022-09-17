import Link from 'next/link'

interface PostProps {
  dt: [
    {
      slug: string
      meta: {
        title: string
        description: string
        date: string
      }
    }
  ]
}

const Posts: React.FC<PostProps> = ({ dt }) => {
  return (
    <div className="flex flex-col pt-8 pb-36 sm:w-5/6 2xl:px-24 space-y-8 -ml-2">
      {dt.map((s) => {
        return (
          <Link href={`/blog/${s.slug}`}>
            <div className="cursor-pointer flex flex-col space-y-2  p-3 rounded-lg">
              <div className="flex justify-between">
                <h1 className="dark:text-white text-black text-xl md:text-2xl font-semibold">
                  {s.meta.title}
                </h1>
                <span className="dark:text-gray-500 text-gray-600 text-sm md:text-base">
                  {s.meta.date}
                </span>
              </div>
              <p className="dark:text-gray-500 text-gray-600 text-sm md:text-base">
                {s.meta.description}
              </p>
            </div>
          </Link>
        )
      })}
    </div>
  )
}
export default Posts
