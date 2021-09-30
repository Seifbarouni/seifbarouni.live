interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className=" flex flex-col justify-center items-center lg:px-72 md:px-14 w-full mb-8 dark:text-gray-400 text-gray-600">
      <hr className="w-full border-1 border-gray-200 dark:border-gray-800 mb-8" />
      <div className="flex items-center">
        <span>
          This website is built with{' '}
          <a
            target="_blank"
            href="https://tailwindcss.com/"
            className="underline text-blue-500"
          >
            Tailwindcss
          </a>{' '}
          and{' '}
          <a
            target="_blank"
            href=" https://nextjs.org/"
            className="underline text-blue-500"
          >
            Nextjs
          </a>{' '}
        </span>
      </div>
      <div className="flex pt-4 space-x-16">
        <a
          target="_blank"
          href="https://github.com/Seifbarouni"
          className="hover:underline"
        >
          Github
        </a>
        <a
          target="_blank"
          href="https://linkedin.com/in/seif-barouni-5811191b8
          "
          className="hover:underline"
        >
          Linkedin
        </a>
        <a
          target="_blank"
          href="https://www.facebook.com/profile.php?id=100008525445930"
          className="hover:underline"
        >
          facebook
        </a>
      </div>
    </footer>
  )
}
export default Footer
