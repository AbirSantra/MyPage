import Head from "next/head";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Abir Santra | FullStack Web Developer | Graphics Designer</title>
        <meta name="description" content="Abir Santra's portfolio" />
        <link rel="icon" href="/abir dp.png" />
      </Head>

      <Navbar />
      <Hero />
    </div>
  );
}
