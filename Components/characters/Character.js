import Head from "next/head";
import Image from "next/image";
import useSWR from "swr";
import { fetcher } from "../../fetcher/fetcher";

const Character = ({ url }) => {
  const { data: character } = useSWR(url, fetcher);
  return !character ? null : (
    <>
      <Head>
        <title>{`Character: ${character.name}`}</title>
        <meta
          name="description"
          content="Browse rick and morty characters, episodes and locations"
        />
      </Head>
      <div>
        <h1>Details Page</h1>
        <Image
          src={character.image}
          width="100px"
          height="100px"
          alt="profile pic"
        />
        <p>Name: {character.name}</p>
        <p>Species: {character.species}</p>
        <p>Gender: {character.gender}</p>
        <p>Type: {character.type}</p>
        <p>Status: {character.status}</p>
        <p>Location: {character.location.name}</p>
        <p>Episodes: {character.episode.length}</p>
        <p>Origin: {character.origin.name}</p>
      </div>
    </>
  );
};

export default Character;
