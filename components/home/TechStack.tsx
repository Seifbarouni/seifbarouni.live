import React from 'react'

interface TechStackProps {}

const TechStack: React.FC<TechStackProps> = ({}) => {
  return (
    <div className="mb-16 pt-4 flex flex-col">
      <a
        rel="noopener noreferrer"
        href="https://www.nextjs.org"
        target="_blank"
        aria-label="Read more about nextjs"
      >
        NextJS
      </a>
      <a
        rel="noopener noreferrer"
        href="https://tailwindcss.com/"
        target="_blank"
        aria-label="Read more about tailwindcss"
      >
        TailwindCSS
      </a>
      <a
        rel="noopener noreferrer"
        href="https://go.dev/"
        target="_blank"
        aria-label="Read more about golang"
      >
        Golang
      </a>
      <div>
        <a
          rel="noopener noreferrer"
          href="https://www.postgresql.org/"
          target="_blank"
          aria-label="Read more about postgres"
        >
          PostgreSQL
        </a>{' '}
        or{' '}
        <a
          rel="noopener noreferrer"
          href="https://www.mongodb.com/"
          target="_blank"
          aria-label="Read more about mongodb"
        >
          MongoDB
        </a>
      </div>
      <a
        rel="noopener noreferrer"
        href="https://azure.microsoft.com/en-us/"
        target="_blank"
        aria-label="Read more about Azure"
      >
        And hosting on Azure
      </a>
    </div>
  )
}
export default TechStack
