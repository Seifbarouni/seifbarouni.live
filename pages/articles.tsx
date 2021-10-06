import Layout from './components/Layout'

interface articlesProps {}

const articles: React.FC<articlesProps> = ({}) => {
  return (
    <Layout selected="articles">
      <div className="flex flex-col  xl:px-72 md:px-16 justify-center">
        <h1 className="text-3xl md:text-5xl dark:text-white text-black font-bold pt-6 pb-96">
          No articles a the moment.
        </h1>
      </div>
    </Layout>
  )
}
export default articles
