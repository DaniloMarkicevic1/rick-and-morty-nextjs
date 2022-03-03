import Head from "next/head";
import Link from "next/link";

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Rick And Morty</title>
      </Head>
      <h1>The Rick & Morty Page</h1>
      <Link href={"/episodes"}>Episodes</Link>
      <Link href={"/characters"}>Characters</Link>
      <Link href={"/locations"}>Locations</Link>
    </>
  );
};

export default HomePage;
