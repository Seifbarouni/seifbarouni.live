interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer
      className=" flex flex-col justify-center items-center lg:px-72 md:px-14 w-5/6 mb-8 dark:text-gray-400 text-gray-600 mt-24"
      id="footer"
    >
      <div className="flex items-center justify-center text-center">
        <span>
          This website is built with{' '}
          <a
            rel="noopener noreferrer"
            target="_blank"
            href=" https://nextjs.org/"
            className="underline text-blue-500"
          >
            Nextjs
          </a>{' '}
          and{' '}
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://tailwindcss.com/"
            className="underline text-blue-500"
          >
            Tailwindcss
          </a>{' '}
        </span>
      </div>
      <div className="flex pt-4 space-x-8">
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://github.com/Seifbarouni"
          className="hover:underline"
        >
          Github
        </a>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://linkedin.com/in/seif-barouni-5811191b8
          "
          className="hover:underline"
        >
          Linkedin
        </a>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://www.facebook.com/profile.php?id=100008525445930"
          className="hover:underline"
        >
          Facebook
        </a>
      </div>
    </footer>
  )
}
export default Footer
