import React from 'react';
import Head from 'next/head';
import ThemeContextProvider from '../contexts/theme-context';
import '../styles/globals.css';

const App = ({ Component, pageProps }) => {
  return (
    <ThemeContextProvider>
      <Head>
        <link rel="icon" href="/portfolio-favicon.svg" />
        <link rel="apple-touch-icon" href="/portfolio-favicon.svg" />
      </Head>
      <Component {...pageProps} />
    </ThemeContextProvider>
  );
};

export default App;
