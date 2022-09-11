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
    <li className="mb-4 flex">
      <div className=" mb-2">
        <svg
          viewBox="0 0 512 512"
          className="h-4 md:mt-0.5 mt-1 fill-current text-blue-500"
        >
          <path d="m256 0c-141.164062 0-256 114.835938-256 256s114.835938 256 256 256 256-114.835938 256-256-114.835938-256-256-256zm0 0" />
          <path
            d="m385.75 201.75-138.667969 138.664062c-4.160156 4.160157-9.621093 6.253907-15.082031 6.253907s-10.921875-2.09375-15.082031-6.253907l-69.332031-69.332031c-8.34375-8.339843-8.34375-21.824219 0-30.164062 8.339843-8.34375 21.820312-8.34375 30.164062 0l54.25 54.25 123.585938-123.582031c8.339843-8.34375 21.820312-8.34375 30.164062 0 8.339844 8.339843 8.339844 21.820312 0 30.164062zm0 0"
            fill="#fafafa"
          />
        </svg>
      </div>
      <div className="flex flex-col ml-2">
        <p className="text-gray-900 dark:text-gray-100">{title}</p>
        <p className="text-gray-600 dark:text-gray-400">{children}</p>
      </div>
    </li>
  )
}

const FullTimeline: React.FC<FullTimelineProps> = ({}) => {
  return (
    <div className="pt-8 pb-8 sm:w-5/6 2xl:px-24">
      <Year>2022</Year>
      <ul>
        <Achievement title="Started the first semester of my fourth year of computer science"></Achievement>
        <Achievement title="Got my first part time job as a software engineer">
          <p>
            Learning more about Kubernetes and how to use it to deploy
            applications.
          </p>
        </Achievement>
        <Achievement title="Learned more about Devops and agile methodologies">
          <p>
            Agile is an approach to software development that seeks the
            continuous delivery of working software created in rapid iterations.
          </p>
        </Achievement>
        <Achievement title="Started the second semester of my studies"></Achievement>
      </ul>
      <Hr />
      <Year>2021</Year>
      <ul>
        <Achievement title="Started learning Kubernetes">
          <p>
            Kubernetes is a new kind of containerization platform that is
            designed to make it easy to deploy, manage, and run applications
            across a variety of different cloud providers.
          </p>
        </Achievement>
        <Achievement title="Started the first semester of my third year of computer science">
          Learned more about advanced algorithms and complexities, compilation,
          software architecture and database administration.
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
        <Achievement title="Got introduced to Docker">
          <p>
            Docker is a tool that allows you to run applications in a
            containerized environment. It is a great way to run things like web
            servers and databases.
          </p>
        </Achievement>
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
          Express with Prisma and Typescript while making a project. I also
          learned how to use Git and Github.
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
          By getting my hands dirty with servers and APIs, I learned about
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
          Pascal and it's an old programming language.
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
