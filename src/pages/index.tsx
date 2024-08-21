import Head from "next/head";
import { useInView } from 'react-intersection-observer';

import Navbar from "../components/Navbar";
import Footer from "../components/index/Footer";
import Banner from "../components/Banner";

export default function Home() {

  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <>
      <Head>
        <title>sardiniaa</title>
        <meta name="description" content="sardiniaa personal site" />
        <meta property='theme-color' content='#725d47' />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="relative pattern-grid-lg min-h-screen text-primary overflow-x-hidden px-6">
      </main>
    </>
  );
}
