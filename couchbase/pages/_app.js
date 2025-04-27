import { Poppins } from "next/font/google";
import "../styles/globals.css";
import Head from "next/head";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

function MyApp({ Component, pageProps }) {
  return (
    <div className={poppins.className}>
      <Head>
        <title>Home</title>
        <meta name="description" content="Couchbase Reporting Application" />
        <link rel="icon" href="/couchbase.ico" />
      </Head>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
