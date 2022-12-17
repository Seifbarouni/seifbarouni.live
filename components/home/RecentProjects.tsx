import Project from './Project'

interface RecentProjectsProps {}

const RecentProjects: React.FC<RecentProjectsProps> = () => {
  return (
    <div className="flex flex-col space-y-3 mb-16" id="projects">
      <Project
        link="https://github.com/Seifbarouni/seifbarouni.live"
        title="seifbarouni.live"
        description="My portfolio website with a blog feature."
        used={['NextJS', 'TailwindCSS', 'TypeScript']}
      />
      <Project
        link="https://github.com/Seifbarouni/azure-terraform"
        title="azure-terraform"
        description="Basic Azure Devops pipeline to provision Azure resources using Terraform."
        used={['Terraform', 'Azure', 'Azure Devops']}
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
    </div>
  )
}

export default RecentProjects
