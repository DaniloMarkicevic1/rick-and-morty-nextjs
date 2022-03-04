import Head from "next/head";
import Link from "next/link";
import classes from "../styles/homepage.module.css";
const HomePage = () => {
  return (
    <div className={classes.title}>
      <Head>
        <title>Rick And Morty</title>
      </Head>
      <h1>The Rick & Morty Page</h1>
      <div className={classes.pages}>
        <Link href={"/episodes"}>Episodes</Link>
        <Link href={"/characters"}>Characters</Link>
        <Link href={"/locations"}>Locations</Link>
      </div>
    </div>
  );
};

export default HomePage;
