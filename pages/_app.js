import '../styles/globals.css';
import '../styles/vue-carousel.css';
import { useEffect } from 'react';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Always set dark mode
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  }, []);

  return (
    <>
      <Head>
        {/* Preconnect to external domains for faster loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* DNS prefetch for external resources */}
        <link rel="dns-prefetch" href="https://github.com" />
        <link rel="dns-prefetch" href="https://www.linkedin.com" />
        {/* Preload critical images */}
        <link rel="preload" href="/images/profile/logo.png" as="image" />
        <link rel="preload" href="/images/profile/home (1).png" as="image" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;


