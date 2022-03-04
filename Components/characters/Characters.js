import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import classes from "../../styles/characters.module.css";
import { fetcher } from "../../fetcher/fetcher";
import useSWR from "swr";

const Characters = () => {
  const { data: characters } = useSWR(
    `https://rickandmortyapi.com/api/character`,
    fetcher
  );
  console.log(characters);
  const [numberOfPages, setNumberOfPages] = useState([]);
  const handlePagination = (pages) => {
    let help = [];
    for (let i = 0; i < pages; i++) {
      help.push(i + 1);
    }
    setNumberOfPages(help);
  };

  useEffect(() => {
    handlePagination(characters.info.pages);
  }, []);

  return (
    <>
      <Head>
        <title>R&M Characters</title>
      </Head>
      <div className={classes.pagination}>
        <span>{"<"}</span>
        {numberOfPages.map((num) => {
          return (
            <p key={`${num}`} style={{ padding: "0 2px 0 2px" }}>
              {num.toString()}
            </p>
          );
        })}
        <span>{">"}</span>
      </div>
      <div className={classes.characters}>
        {characters.results.map((character) => {
          return (
            <div key={character.id} className={classes.characterCard}>
              <p>Name: {character.name}</p>
              <p>Status: {character.status}</p>
              <p>Species: {character.species}</p>
              <Link href={`/characters/${character.id}`}>
                <a>
                  <p>Go to Character page</p>
                  <Image
                    width="100px"
                    height="100px"
                    src={character.image}
                    alt="character"
                  />
                </a>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Characters;
