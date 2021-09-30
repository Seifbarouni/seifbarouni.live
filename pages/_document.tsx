import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
        </Head>
        <body className="dark:bg-eerie-black bg-gray-100 overflow-y-auto">
          <div className="h-2 bg-gradient-to-r from-blue-500 via-red-500 to-pink-500 sticky top-0 z-40" />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
