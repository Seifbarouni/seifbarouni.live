import Project from './Project'

interface RecentProjectsProps {}

const RecentProjects: React.FC<RecentProjectsProps> = () => {
  return (
    <div className="flex flex-col space-y-3 mb-16" id="projects">
      <Project
        link="https://github.com/Seifbarouni/go-create"
        title="go-create"
        description="A tool that helps me create my apps (console apps, back-end web apps, full-stack web apps)."
        used={['Golang']}
        from="from-purple-400 "
        to="to-orange-300"
      />
      <Project
        link="https://github.com/Seifbarouni/go-config-server"
        title="go-config-server"
        description="App that provides an HTTP resource-based API for external configuration (YAML content)."
        used={['Golang', 'Microservices']}
        from="from-lime-300 "
        to="to-green-400"
      />
      <Project
        link="https://github.com/Seifbarouni/BraveBlog-frontend"
        title="Brave Blog"
        description="A blog built with React that has a simple livestream feature."
        used={['React', 'Typescript', 'PostgreSQL', 'Tailwind']}
        from="from-teal-300 "
        to="to-blue-200"
      />
    </div>
  )
}

export default RecentProjects
