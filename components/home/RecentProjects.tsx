import Project from './Project'

interface RecentProjectsProps {}

const RecentProjects: React.FC<RecentProjectsProps> = () => {
  return (
    <div className="flex flex-col space-y-3 mb-16" id="projects">
      <Project
        link="https://github.com/Seifbarouni/seifbarouni.live"
        title="seifbarouni.live"
        description="My portfolio website whith a blog feature."
        used={['Next.js', 'Tailwind CSS', 'TypeScript']}
      />
      <Project
        link="https://github.com/Seifbarouni/go-create"
        title="go-create"
        description="A tool that helps me create my apps (console apps, back-end web apps, full-stack web apps)."
        used={['Golang']}
      />
      <Project
        link="https://github.com/Seifbarouni/go-config-server"
        title="go-config-server"
        description="App that provides an HTTP resource-based API for external configuration (YAML content)."
        used={['Golang', 'Microservices']}
      />
      <Project
        link="https://github.com/Seifbarouni/BraveBlog-frontend"
        title="Brave Blog"
        description="A blog built with React that has a simple livestream feature."
        used={['React', 'Typescript', 'PostgreSQL', 'Tailwind']}
      />
    </div>
  )
}

export default RecentProjects
