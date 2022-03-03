import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const NewsPage = ({ characters }) => {
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
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
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
      {characters.results.map((character) => {
        return (
          <div key={character.id} className="character">
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
    </>
  );
};

export const getStaticProps = async () => {
  const res = await fetch(`https://rickandmortyapi.com/api/character`);
  const characters = await res.json();

  return {
    props: {
      characters,
    },
  };
};

export default NewsPage;
