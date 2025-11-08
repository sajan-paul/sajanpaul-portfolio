import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';
import SectionIndicator from './SectionIndicator';
import Pattern from '../common/Pattern';

const Layout = ({ children, title = "Sajan Paul", description = "Web designer and front-end developer crafting responsive websites where technologies meet creativity." }) => {
  // Always use "Sajan Paul" as the title
  const pageTitle = "Sajan Paul";
  
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/profile/logo.png" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={description} />
        {/* Performance optimizations */}
        <meta httpEquiv="x-dns-prefetch-control" content="on" />
        <link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" />
      </Head>
      
      <div className="min-h-screen relative">
        <Pattern />
        <div className="relative z-10">
        <Navbar />
        <main className="relative pt-16 text-secondary-800 dark:text-secondary-100">
            <SectionIndicator />
          {children}
        </main>
        <Footer />
        </div>
      </div>
    </>
  );
};

export default Layout;


