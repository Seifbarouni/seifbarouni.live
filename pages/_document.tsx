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
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
            rel="stylesheet"
          />
          <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
        </Head>
        <body className="dark:bg-eerie-black bg-white">
          <div className="h-2 bg-gradient-to-r from-blue-500 via-red-500 to-pink-500" />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
