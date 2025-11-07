import '../styles/globals.css';
import '../styles/vue-carousel.css';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Always set dark mode
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;


