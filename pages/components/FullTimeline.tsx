interface FullTimelineProps {}
interface YearProps {
  children: string
}
interface AchievementProps {
  title: string
  children?: React.ReactNode
}

const Hr = () => {
  return (
    <div className="border border-gray-300 dark:border-gray-600 w-full my-8" />
  )
}

const Year: React.FC<YearProps> = ({ children }) => {
  return (
    <h3 className="text-lg md:text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
      {children}
    </h3>
  )
}

const BigDivider = () => {
  return (
    <div className="flex flex-col dark:text-white text-black justify-center items-center text-lg">
      <span>.</span>
      <span>.</span>
      <span>.</span>
      <span>.</span>
      <span>.</span>
    </div>
  )
}

const Achievement: React.FC<AchievementProps> = ({ title, children }) => {
  return (
    <li className="mb-4 ml-2">
      <div className="flex items-center mb-2 text-green-600 dark:text-green-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 mr-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <p className="text-gray-900 dark:text-gray-100">{title}</p>
      </div>
      <p className="text-gray-600 dark:text-gray-400 ml-6">{children}</p>
    </li>
  )
}

const FullTimeline: React.FC<FullTimelineProps> = ({}) => {
  return (
    <div className="pt-8 pb-8 w-11/12">
      <Year>2021</Year>
      <ul>
        <Achievement title="Started my third year of computer science">
          Learned more about advanced algorithms, compilation and software
          architecture.
        </Achievement>
        <Achievement title="Learned Nextjs">
          Great framework for developing production-ready react apps. Has a lot
          of features out of the box like code splitting and image optimization.
        </Achievement>
        <Achievement title="Got my first internship as a software developer">
          I worked with the front end team on an internal project for the
          company. Overall a nice experience.
        </Achievement>
      </ul>
      <Hr />
      <Year>2020</Year>
      <ul>
        <Achievement title="Started my second year of computer science">
          Learned C++ in the first semester, Java and Python in the second
          semester.
        </Achievement>
        <Achievement title="Learned Reactjs and Tailwindcss">
          I liked how react makes creating front end apps simple and easy. And
          styling them with tailwindcss saves me a lot of time.
        </Achievement>
        <Achievement title="Learned other great technologies">
          While learning Java in class, I thought it would be a good idea to
          learn Spring Boot to build full stack applications. I have also used
          ProstgreSQL in every project I have done. On top of that, I learned
          Express with Prisma and Typescript while making a project.
        </Achievement>
      </ul>
      <Hr />
      <Year>2019</Year>
      <ul>
        <Achievement title="Started my first year of computer science">
          Learned the basics of programming with the C programming language.
        </Achievement>
        <Achievement title="Created APIs and web servers with Go">
          When I started to get into web development, I wanted to start with the
          back end. So I chose the{' '}
          <a
            target="_blank"
            href="https://golang.org/"
            className="text-blue-500 underline"
          >
            Go programming language.
          </a>{' '}
          By getting my hand dirty with servers and APIs, I learned about
          authentication, cookies, sessions and ORMs.
        </Achievement>
        <Achievement title="Learned the basics of the web (HTML, CSS and VanillaJS)">
          I tried to make a simple website for the first time and it was a great
          experience but the CSS part was hard. I also learned about how{' '}
          <a
            target="_blank"
            href="https://developer.mozilla.org/en-US/docs/Web/HTTP"
            className="text-blue-500 underline"
          >
            HTTP/HTTPS
          </a>{' '}
          works (status codes, requests and responses...).
        </Achievement>
        <Achievement title="Graduated High School 🎉"></Achievement>
      </ul>
      <Hr />
      <Year>2018</Year>
      <ul>
        <Achievement title="Got introduced to programming">
          The first programming language I learned in high school is called
          Pascal and it's an old programming language. Seeing a computer
          executing commands that I wrote was really fascinating 🤩.
        </Achievement>
      </ul>
      <Hr />
      <BigDivider />
      <Hr />
      <Year>2000</Year>
      <ul>
        <Achievement title="Born 👶🏻"></Achievement>
      </ul>
    </div>
  )
}
export default FullTimeline
