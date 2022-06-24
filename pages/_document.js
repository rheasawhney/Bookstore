import { Html, Head, Main, NextScript } from 'next/document'
import { logoUrl } from '../public/constants/url'

export default function Document() {
  return (
    <Html>
      <Head >
        <link rel="shortcut icon" href={logoUrl} />
      </Head>
      
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}