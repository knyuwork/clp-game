import Document, { Html, Head, Main, NextScript } from 'next/document'
import fetch from 'node-fetch'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <title>SEC Game</title>
        <Head />
        <body>
            <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument