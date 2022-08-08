import { ColorModeScript } from '@chakra-ui/react';
import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head>
        <meta charSet="utf-8" />        
        <link rel="icon" href="/favicon.ico" />
        <noscript>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          <link href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@500&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
        </noscript>
      </Head>
      <body>
        <ColorModeScript initialColorMode='light' />
        <Main />
        <NextScript />
        <Script src="/js/lazyStyles.js" strategy='lazyOnload' />
      </body>
    </Html>
  );
}