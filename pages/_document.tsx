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
          <link
            rel="preload"
            href="/fonts/inter-var-latin.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
        </Head>
        <body className="dark:bg-eerie-black bg-gray-100 overflow-y-auto">
          <Main />
          <NextScript />
          <div className="h-2 bg-gradient-to-r from-blue-500 via-red-500 to-pink-500 sticky top-0 z-40" />
        </body>
      </Html>
    )
  }
}

export default MyDocument
