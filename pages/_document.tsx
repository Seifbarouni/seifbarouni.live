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
            rel="preload"
            href="/fonts/inter-var-latin.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
        </Head>
        <body className="bg-eerie-black">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
