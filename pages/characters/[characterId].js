import Head from "next/head";
import Image from "next/image";

const DetailsPage = ({ character }) => {
  return (
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
export const getStaticPaths = async () => {
  const res = await fetch(`https://rickandmortyapi.com/api/character`);
  const characters = await res.json();
  return {
    paths: characters.results.map((character) => ({
      params: { characterId: character.id.toString() },
    })),
    fallback: true, // false or 'blocking'
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.characterId;
  const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
  const character = await res.json();

  return {
    props: {
      character,
    },
  };
};

export default DetailsPage;
