// bring in Head component
import Head from 'next/head';
// bring in bootstrap css with responsive css media queries
import '../styles/bootstrap.min.css';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
  <Head>
    <Component {...pageProps} />
  </Head>
  );
}

export default MyApp
