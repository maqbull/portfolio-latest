import Document, { Head, Html, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }
  render() {
    return (
      <Html lang='en-GB'>
        <Head>
          <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
          <meta name="title" content="Mohd Maqbool - Software Dev" />
          <link rel="shortcut icon" href="data:image/jpeg;base64,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" />
          <meta name="description" content="Hey there, This is Mohd Maqbool. I am a Software developer who  works on Front-End, Back-End, & Web3." />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Mohd Maqbool - Software Dev" />
          <meta property="og:description" content="Hey there, This is Mohd Maqbool. I am a Software developer who  works on Front-End, Back-End, & Web3." />
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:title" content="Mohd Maqbool - Software Dev" />
          <meta property="twitter:description" content="Hey there, This is Mohd Maqbool. I am a Software developer who  works on Front-End, Back-End, & Web3." />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
