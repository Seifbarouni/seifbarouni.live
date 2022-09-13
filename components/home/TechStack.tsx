import React from 'react'

interface TechStackProps {}

const TechStack: React.FC<TechStackProps> = ({}) => {
  return (
    <div className="mb-16 pt-4 flex flex-col">
      <a
        href="https://www.nextjs.org"
        target="_blank"
        aria-label="Read more about nextjs"
      >
        NextJS
      </a>
      <a
        href="https://tailwindcss.com/"
        target="_blank"
        aria-label="Read more about tailwindcss"
      >
        TailwindCSS
      </a>
      <a
        href="https://go.dev/"
        target="_blank"
        aria-label="Read more about golang"
      >
        Golang
      </a>
      <div>
        <a
          href="https://www.postgresql.org/"
          target="_blank"
          aria-label="Read more about postgres"
        >
          PostgreSQL
        </a>{' '}
        or{' '}
        <a
          href="https://www.mongodb.com/"
          target="_blank"
          aria-label="Read more about mongodb"
        >
          MongoDB
        </a>
      </div>
    </div>
  )
}
export default TechStack
