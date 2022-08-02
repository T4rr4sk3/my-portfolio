import { ColorModeScript } from '@chakra-ui/react';
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head>
        <meta charSet="utf-8" />        
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@500&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </Head>
      <body>
        <ColorModeScript  />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}